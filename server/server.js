const express = require('express');
const cors = require('cors');
const path = require('path');
const googleTTS = require('google-tts-api');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Dynamic import for ESM msedge-tts
let MsEdgeTTS, OUTPUT_FORMAT;

async function initTTS() {
  const module = await import('msedge-tts');
  MsEdgeTTS = module.MsEdgeTTS;
  OUTPUT_FORMAT = module.OUTPUT_FORMAT;
  console.log('✅ MsEdgeTTS module loaded');
}

// Simple in-memory user store
const users = new Map();
users.set('admin2002', { 
  username: 'admin2002', 
  password: 'Taikhoan01@@@', 
  plan: 'basic',
  favorites: [],
  clonedVoices: []
});

// Sessions store
const sessions = new Map();

// ==================== AUTH ROUTES ====================
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.get(username);
  if (user && user.password === password) {
    const token = 'tok_' + Date.now() + '_' + Math.random().toString(36).slice(2);
    sessions.set(token, username);
    res.json({ 
      success: true, 
      token, 
      user: { 
        username: user.username, 
        plan: user.plan,
        favorites: user.favorites 
      } 
    });
  } else {
    res.status(401).json({ success: false, message: 'Sai tên đăng nhập hoặc mật khẩu' });
  }
});

app.post('/api/auth/register', (req, res) => {
  const { username, password } = req.body;
  if (users.has(username)) {
    return res.status(400).json({ success: false, message: 'Tên đăng nhập đã tồn tại' });
  }
  if (!username || username.length < 3) {
    return res.status(400).json({ success: false, message: 'Tên đăng nhập phải có ít nhất 3 ký tự' });
  }
  if (!password || password.length < 6) {
    return res.status(400).json({ success: false, message: 'Mật khẩu phải có ít nhất 6 ký tự' });
  }
  users.set(username, { 
    username, 
    password, 
    plan: 'basic',
    favorites: [],
    clonedVoices: []
  });
  const token = 'tok_' + Date.now() + '_' + Math.random().toString(36).slice(2);
  sessions.set(token, username);
  res.json({ 
    success: true, 
    token, 
    user: { username, plan: 'basic', favorites: [] } 
  });
});

app.get('/api/auth/me', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ success: false });
  }
  const username = sessions.get(token);
  const user = users.get(username);
  res.json({ 
    success: true, 
    user: { 
      username: user.username, 
      plan: user.plan,
      favorites: user.favorites 
    } 
  });
});

// ==================== VOICE ROUTES ====================
let cachedVoices = null;

app.get('/api/voices', async (req, res) => {
  try {
    if (cachedVoices) {
      return res.json(cachedVoices);
    }
    
    // Use MsEdgeTTS to get voice list
    const tts = new MsEdgeTTS();
    const voices = await tts.getVoices();
    
    // Process and organize voices
    const processedVoices = voices.map(v => ({
      id: v.ShortName,
      name: v.FriendlyName || v.ShortName,
      shortName: v.ShortName,
      locale: v.Locale,
      gender: v.Gender,
      language: v.Locale ? v.Locale.split('-')[0] : '',
      country: v.Locale ? v.Locale.split('-')[1] || '' : '',
    }));
    
    cachedVoices = processedVoices;
    res.json(processedVoices);
  } catch (error) {
    console.error('Error fetching voices:', error);
    res.status(500).json({ error: 'Failed to fetch voices: ' + error.message });
  }
});

// ==================== TTS ROUTE ====================
app.post('/api/tts', async (req, res) => {
  try {
    const { text, voice, rate, pitch, volume, engine } = req.body;
    
    if (!text || !voice) {
      return res.status(400).json({ error: 'Text and voice are required' });
    }

    if (engine === 'google') {
      // Use Google TTS Engine
      const isSlow = rate ? rate < 0 : false;
      const base64AudioItems = await googleTTS.getAllAudioBase64(text, {
        lang: 'vi', // Currently Google TTS supports 1 voice per language, fallback to 'vi' for Chị Google
        slow: isSlow,
        host: 'https://translate.google.com',
        splitPunct: ',.?',
      });
      
      const buffers = base64AudioItems.map(item => Buffer.from(item.base64, 'base64'));
      const combinedBuffer = Buffer.concat(buffers);
      
      res.setHeader('Content-Type', 'audio/mpeg');
      res.setHeader('Content-Disposition', 'attachment; filename="tts_output_google.mp3"');
      res.send(combinedBuffer);
      return;
    }

    // Default to MsEdge TTS Engine
    const tts = new MsEdgeTTS();
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

    // Build SSML prosody attributes
    const rateStr = rate ? `${rate >= 0 ? '+' : ''}${rate}%` : '+0%';
    const pitchStr = pitch ? `${pitch >= 0 ? '+' : ''}${pitch}Hz` : '+0Hz';
    const volumeStr = volume ? `${volume >= 0 ? '+' : ''}${volume}%` : '+0%';

    // Use toStream for synthesis
    const { audioStream } = tts.toStream(text, {
      rate: rateStr,
      pitch: pitchStr,
      volume: volumeStr
    });
    
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'attachment; filename="tts_output.mp3"');
    
    audioStream.pipe(res);
    
    audioStream.on('error', (err) => {
      console.error('Audio stream error:', err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Stream error: ' + err.message });
      }
    });
    
  } catch (error) {
    console.error('TTS Error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to synthesize speech: ' + error.message });
    }
  }
});

// ==================== BATCH TTS ROUTE ====================
app.post('/api/tts/batch', async (req, res) => {
  try {
    const { paragraphs } = req.body;
    
    if (!paragraphs || !paragraphs.length) {
      return res.status(400).json({ error: 'Paragraphs are required' });
    }

    const audioBuffers = [];
    
    for (const para of paragraphs) {
      if (para.engine === 'google') {
        const isSlow = para.rate ? para.rate < 0 : false;
        const base64AudioItems = await googleTTS.getAllAudioBase64(para.text, {
          lang: 'vi',
          slow: isSlow,
          host: 'https://translate.google.com',
          splitPunct: ',.?',
        });
        const buffers = base64AudioItems.map(item => Buffer.from(item.base64, 'base64'));
        audioBuffers.push(Buffer.concat(buffers));
        continue;
      }

      // Default MsEdge TTS
      const tts = new MsEdgeTTS();
      await tts.setMetadata(para.voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
      
      const rateStr = para.rate ? `${para.rate >= 0 ? '+' : ''}${para.rate}%` : '+0%';
      const pitchStr = para.pitch ? `${para.pitch >= 0 ? '+' : ''}${para.pitch}Hz` : '+0Hz';
      const volumeStr = para.volume ? `${para.volume >= 0 ? '+' : ''}${para.volume}%` : '+0%';

      const { audioStream } = tts.toStream(para.text, {
        rate: rateStr,
        pitch: pitchStr,
        volume: volumeStr
      });
      
      const chunks = [];
      await new Promise((resolve, reject) => {
        audioStream.on('data', chunk => chunks.push(chunk));
        audioStream.on('end', resolve);
        audioStream.on('close', resolve);
        audioStream.on('error', reject);
      });
      
      audioBuffers.push(Buffer.concat(chunks));
    }
    
    const combined = Buffer.concat(audioBuffers);
    
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'attachment; filename="tts_batch_output.mp3"');
    res.send(combined);
    
  } catch (error) {
    console.error('Batch TTS Error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to synthesize batch: ' + error.message });
    }
  }
});

// ==================== FAVORITES ====================
app.post('/api/favorites/toggle', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ success: false });
  }
  const username = sessions.get(token);
  const user = users.get(username);
  const { voiceId } = req.body;
  
  const index = user.favorites.indexOf(voiceId);
  if (index > -1) {
    user.favorites.splice(index, 1);
  } else {
    user.favorites.push(voiceId);
  }
  
  res.json({ success: true, favorites: user.favorites });
});

// ==================== HISTORY ====================
const ttsHistory = new Map();

app.post('/api/history/add', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ success: false });
  }
  const username = sessions.get(token);
  const { text, voice, voiceName } = req.body;
  
  if (!ttsHistory.has(username)) {
    ttsHistory.set(username, []);
  }
  
  const history = ttsHistory.get(username);
  history.unshift({
    id: Date.now().toString(),
    text: text.substring(0, 200),
    voice,
    voiceName,
    date: new Date().toISOString()
  });
  
  if (history.length > 50) history.pop();
  
  res.json({ success: true });
});

app.get('/api/history', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ success: false });
  }
  const username = sessions.get(token);
  const history = ttsHistory.get(username) || [];
  res.json({ success: true, history });
});

// ==================== STATIC FILE SERVING FOR PRODUCTION ====================
// Serve static frontend files from 'dist' directory
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Catch-all route for SPA routing (must be placed after all API routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// ==================== START SERVER ====================
async function start() {
  await initTTS();
  app.listen(PORT, () => {
    console.log(`🎙️ VibeTTS Server running on http://localhost:${PORT}`);
    console.log(`📢 API Endpoints:`);
    console.log(`   GET  /api/voices     - List all available voices`);
    console.log(`   POST /api/tts        - Convert text to speech`);
    console.log(`   POST /api/tts/batch  - Batch convert paragraphs`);
    console.log(`   POST /api/auth/login - User login`);
  });
}

start().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
