// ==================== VibeTTS Main Application ====================
import { t, getLang, setLang, toggleLang, initI18n } from './i18n.js';
import { countries, getAvailableCountries } from './countries.js';
import { renderHomePage, renderClonePage, renderSttPage, renderLeaderboardPage, renderHistoryPage } from './pages.js';
import { extendedVietnameseVoices, trendingVoices, getTrendingVoices } from './voiceData.js';

// ==================== STATE ====================
const state = {
  user: null,
  token: localStorage.getItem('vibettsToken') || null,
  voices: [],
  filteredVoices: [],
  selectedCountry: null,
  selectedVoice: null,
  favorites: JSON.parse(localStorage.getItem('vibettsFavorites') || '[]'),
  paragraphs: [{ id: 1, text: '' }],
  currentPage: 'home',
  audio: null,
  currentAudioUrl: null,
  theme: localStorage.getItem('vibettsTheme') || 'light',
  isGenerating: false,
  activeTab: 'default', // 'default', 'trending', 'favorites'
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', async () => {
  // Apply saved theme
  applyTheme(state.theme);
  
  // Initialize i18n
  initI18n();
  
  // Setup event listeners
  setupGlobalListeners();
  
  // Check auth
  if (state.token) {
    await checkAuth();
  }
  
  // Route to current hash
  handleRoute();
  
  // Listen for hash changes
  window.addEventListener('hashchange', handleRoute);
  
  // Fetch voices
  fetchVoices();
});

// ==================== ROUTING ====================
function handleRoute() {
  const hash = window.location.hash || '#/';
  const page = hash.replace('#/', '') || 'home';
  
  // Map routes to pages
  const routeMap = {
    '': 'home',
    'home': 'home',
    'voice-clone': 'clone',
    'mp3-to-text': 'stt',
    'leaderboard': 'leaderboard',
    'history': 'history',
  };
  
  const pageName = routeMap[page] || 'home';
  navigateToPage(pageName);
}

function navigateToPage(pageName) {
  state.currentPage = pageName;
  const pageContent = document.getElementById('pageContent');
  
  // Update active nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === pageName);
  });
  
  // Render page
  switch (pageName) {
    case 'home':
      pageContent.innerHTML = renderHomePage();
      initHomePage();
      break;
    case 'clone':
      pageContent.innerHTML = renderClonePage();
      initClonePage();
      break;
    case 'stt':
      pageContent.innerHTML = renderSttPage();
      initSttPage();
      break;
    case 'leaderboard':
      pageContent.innerHTML = renderLeaderboardPage();
      break;
    case 'history':
      loadAndRenderHistory();
      break;
    default:
      pageContent.innerHTML = renderHomePage();
      initHomePage();
  }
  
  // Close mobile sidebar
  closeSidebar();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== GLOBAL LISTENERS ====================
function setupGlobalListeners() {
  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(state.theme);
    localStorage.setItem('vibettsTheme', state.theme);
  });
  
  // Language toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = toggleLang();
    document.getElementById('langLabel').textContent = newLang.toUpperCase();
    // Re-render current page
    handleRoute();
  });
  
  // Login button
  document.getElementById('loginBtn').addEventListener('click', () => {
    document.getElementById('loginModal').classList.add('active');
  });
  
  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('loginModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('loginModal')) closeModal();
  });
  
  // Modal tabs
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isRegister = tab.dataset.tab === 'register';
      document.querySelector('#submitAuth span').textContent = isRegister ? t('btnRegister') : t('btnLogin');
    });
  });
  
  // Login form
  document.getElementById('loginForm').addEventListener('submit', handleAuth);
  
  // Toggle password visibility
  document.getElementById('togglePassword').addEventListener('click', () => {
    const input = document.getElementById('inputPassword');
    input.type = input.type === 'password' ? 'text' : 'password';
  });
  
  // Logout
  document.getElementById('logoutBtn').addEventListener('click', handleLogout);
  
  // Mobile sidebar
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('active');
  });
  
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
  
  // Audio player controls
  setupPlayerControls();
  
  // Feature card navigation
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-navigate]');
    if (card) {
      window.location.hash = card.dataset.navigate;
    }
  });
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('active');
}

// ==================== THEME ====================
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const lightIcon = document.querySelector('.theme-icon-light');
  const darkIcon = document.querySelector('.theme-icon-dark');
  if (theme === 'dark') {
    if (lightIcon) lightIcon.style.display = 'none';
    if (darkIcon) darkIcon.style.display = 'block';
  } else {
    if (lightIcon) lightIcon.style.display = 'block';
    if (darkIcon) darkIcon.style.display = 'none';
  }
}

// ==================== AUTH ====================
async function checkAuth() {
  try {
    const res = await fetch('/api/auth/me', {
      headers: { 'Authorization': `Bearer ${state.token}` }
    });
    const data = await res.json();
    if (data.success) {
      state.user = data.user;
      state.favorites = data.user.favorites || [];
      updateAuthUI();
    } else {
      state.token = null;
      localStorage.removeItem('vibettsToken');
    }
  } catch (e) {
    console.error('Auth check failed:', e);
  }
}

async function handleAuth(e) {
  e.preventDefault();
  const username = document.getElementById('inputUsername').value.trim();
  const password = document.getElementById('inputPassword').value;
  const isRegister = document.querySelector('.modal-tab.active').dataset.tab === 'register';
  const errorEl = document.getElementById('formError');
  
  try {
    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    
    if (data.success) {
      state.token = data.token;
      state.user = data.user;
      state.favorites = data.user.favorites || [];
      localStorage.setItem('vibettsToken', data.token);
      updateAuthUI();
      closeModal();
      showToast(t('loginSuccess'), 'success');
    } else {
      errorEl.textContent = data.message;
    }
  } catch (e) {
    errorEl.textContent = 'Connection error';
  }
}

function handleLogout() {
  state.user = null;
  state.token = null;
  state.favorites = [];
  localStorage.removeItem('vibettsToken');
  updateAuthUI();
  showToast(t('logoutSuccess'), 'info');
}

function updateAuthUI() {
  const loginBtn = document.getElementById('loginBtn');
  const userMenu = document.getElementById('userMenu');
  const userName = document.getElementById('userName');
  
  if (state.user) {
    loginBtn.style.display = 'none';
    userMenu.style.display = 'flex';
    userName.textContent = state.user.username;
  } else {
    loginBtn.style.display = 'flex';
    userMenu.style.display = 'none';
  }
}

function closeModal() {
  document.getElementById('loginModal').classList.remove('active');
  document.getElementById('formError').textContent = '';
  document.getElementById('inputUsername').value = '';
  document.getElementById('inputPassword').value = '';
}

// ==================== FETCH VOICES ====================
async function fetchVoices() {
  try {
    const res = await fetch('/api/voices');
    const edgeVoices = await res.json();
    
    // Merge Edge TTS voices with extended Vietnamese voices
    // Replace the 2 default Vietnamese voices with the extended set
    const nonVietnameseVoices = edgeVoices.filter(v => {
      const locale = v.locale || v.shortName;
      return !locale.startsWith('vi-VN');
    });
    
    // Add extended Vietnamese voices
    state.voices = [...extendedVietnameseVoices, ...nonVietnameseVoices];
    
    // If we are on home page, initialize
    if (state.currentPage === 'home') {
      initCountryCarousel();
      // Default to Vietnam
      const vnCountry = countries.find(c => c.code === 'VN');
      if (vnCountry) {
        selectCountry(vnCountry);
      }
    }
  } catch (e) {
    console.error('Failed to fetch voices:', e);
    showToast('Failed to load voices. Please check server.', 'error');
  }
}

// ==================== HOME PAGE INIT ====================
function initHomePage() {
  // Country carousel buttons
  const carousel = document.getElementById('countryCarousel');
  if (carousel) {
    document.getElementById('carouselLeft')?.addEventListener('click', () => {
      carousel.scrollBy({ left: -200, behavior: 'smooth' });
    });
    document.getElementById('carouselRight')?.addEventListener('click', () => {
      carousel.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }
  
  // Country search
  const countrySearch = document.getElementById('countrySearch');
  if (countrySearch) {
    countrySearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.country-item').forEach(item => {
        const name = item.dataset.name.toLowerCase();
        item.style.display = name.includes(query) ? '' : 'none';
      });
    });
  }
  
  // Voice search
  const voiceSearch = document.getElementById('voiceSearch');
  if (voiceSearch) {
    voiceSearch.addEventListener('input', (e) => {
      filterVoices(e.target.value);
    });
  }
  
  // Voice category tabs
  document.querySelectorAll('.voice-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.voice-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeTab = tab.dataset.tab;
      handleTabSwitch(tab.dataset.tab);
    });
  });
  
  // Advanced controls toggle
  const advToggle = document.getElementById('advancedToggle');
  if (advToggle) {
    advToggle.addEventListener('click', () => {
      advToggle.classList.toggle('open');
      document.getElementById('advancedBody').classList.toggle('open');
    });
  }
  
  // Sliders
  setupSlider('rateSlider', 'rateValue', '%');
  setupSlider('pitchSlider', 'pitchValue', 'Hz');
  setupSlider('volumeSlider', 'volumeValue', '%');
  
  // Add paragraph button
  const addBtn = document.getElementById('addParagraphBtn');
  if (addBtn) {
    addBtn.addEventListener('click', addParagraph);
  }
  
  // Textarea listeners
  setupTextareaListeners();
  
  // Generate button
  const genBtn = document.getElementById('generateBtn');
  if (genBtn) {
    genBtn.addEventListener('click', handleGenerate);
  }
  
  // If voices already loaded, render them
  if (state.voices.length > 0) {
    initCountryCarousel();
    if (state.selectedCountry) {
      selectCountry(state.selectedCountry);
    } else {
      const vnCountry = countries.find(c => c.code === 'VN');
      if (vnCountry) selectCountry(vnCountry);
    }
  }
}

// ==================== TAB SWITCHING ====================
function handleTabSwitch(tabName) {
  // Find the country section step (step 1) - use the first section-step inside tts-section
  const allSteps = document.querySelectorAll('.tts-section .section-step');
  const countrySection = allSteps[0]; // Step 1: Country selection
  
  switch(tabName) {
    case 'default':
      // Show country selection section, render normal voices
      if (countrySection) countrySection.style.display = 'block';
      if (state.selectedCountry) {
        selectCountry(state.selectedCountry);
      }
      break;
      
    case 'trending':
      // Show country section but filtered, show trending voices
      if (countrySection) countrySection.style.display = 'block';
      const trendVoices = state.selectedCountry 
        ? getTrendingVoices(state.selectedCountry.code)
        : getTrendingVoices(null);
      if (trendVoices.length > 0) {
        renderVoiceGrid(trendVoices);
      } else {
        // Show global trending if no country-specific trending
        renderVoiceGrid(trendingVoices);
      }
      break;
      
    case 'favorites':
      // Hide country section, show favorites only
      if (countrySection) countrySection.style.display = 'none';
      const favVoices = state.voices.filter(v => state.favorites.includes(v.id));
      // Also include trending voices that are favorited
      const favTrending = trendingVoices.filter(v => state.favorites.includes(v.id));
      const allFavs = [...favVoices, ...favTrending];
      
      if (allFavs.length === 0) {
        const grid = document.getElementById('voiceGrid');
        if (grid) {
          grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-tertiary)">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 12px;display:block;opacity:0.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
              <p style="font-size:14px;font-weight:600">${getLang() === 'vi' ? 'Chưa có giọng yêu thích' : 'No favorite voices yet'}</p>
              <p style="font-size:13px;margin-top:4px">${getLang() === 'vi' ? 'Bấm ♡ để thêm giọng vào danh sách yêu thích' : 'Click ♡ to add voices to favorites'}</p>
            </div>
          `;
        }
      } else {
        renderVoiceGrid(allFavs);
      }
      break;
  }
}

function setupSlider(sliderId, valueId, unit) {
  const slider = document.getElementById(sliderId);
  const value = document.getElementById(valueId);
  if (slider && value) {
    slider.addEventListener('input', () => {
      const v = parseInt(slider.value);
      value.textContent = `${v >= 0 ? '+' : ''}${v}${unit}`;
    });
  }
}

// ==================== COUNTRY CAROUSEL ====================
function initCountryCarousel() {
  const carousel = document.getElementById('countryCarousel');
  if (!carousel) return;
  
  const availableCountries = getAvailableCountries(state.voices);
  
  carousel.innerHTML = availableCountries.map(c => `
    <div class="country-item ${state.selectedCountry?.code === c.code ? 'active' : ''}" 
         data-code="${c.code}" data-name="${c.name} ${c.nameEn}" data-locale="${c.locale}">
      <div class="country-flag"><img src="https://flagcdn.com/w80/${c.code.toLowerCase()}.png" alt="${c.nameEn}" onerror="this.parentElement.textContent='${c.flag}'"></div>
      <div class="country-name">${getLang() === 'vi' ? c.name : c.nameEn}</div>
    </div>
  `).join('');
  
  // Add click listeners
  carousel.querySelectorAll('.country-item').forEach(item => {
    item.addEventListener('click', () => {
      const country = availableCountries.find(c => c.code === item.dataset.code);
      if (country) selectCountry(country);
    });
  });
}

function selectCountry(country) {
  state.selectedCountry = country;
  
  // Update active state
  document.querySelectorAll('.country-item').forEach(item => {
    item.classList.toggle('active', item.dataset.code === country.code);
  });
  
  // Filter voices by locale
  const localeLang = country.locale.split('-')[0];
  const localeCountry = country.locale.split('-')[1];
  
  state.filteredVoices = state.voices.filter(v => {
    const vLocale = v.locale || v.shortName;
    const vParts = vLocale.split('-');
    // Match by full locale or language+country
    return vLocale === country.locale || 
           (vParts[0] === localeLang && vParts[1] === localeCountry) ||
           (vParts[0] === localeLang && !localeCountry);
  });
  
  renderVoiceGrid(state.filteredVoices);
}

// ==================== VOICE GRID ====================
function renderVoiceGrid(voices) {
  const grid = document.getElementById('voiceGrid');
  if (!grid) return;
  
  if (voices.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--text-tertiary)">
        ${getLang() === 'vi' ? 'Không tìm thấy giọng đọc' : 'No voices found'}
      </div>
    `;
    return;
  }
  
  grid.innerHTML = voices.map(v => {
    const isMale = v.gender === 'Male';
    const isFav = state.favorites.includes(v.id);
    const isActive = state.selectedVoice?.id === v.id;
    const displayName = extractVoiceName(v);
    
    return `
      <div class="voice-card ${isActive ? 'active' : ''}" data-voice-id="${v.id}">
        <div class="voice-avatar ${isMale ? 'male' : 'female'}">
          ${isMale ? '♂' : '♀'}
        </div>
        <div class="voice-name" title="${v.name}">${displayName}</div>
        <div class="voice-actions">
          <button class="voice-btn preview" data-voice="${v.id}" title="Preview">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
          <button class="voice-btn fav ${isFav ? 'active' : ''}" data-voice="${v.id}" title="Favorite">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
  
  // Event listeners for voice cards
  grid.querySelectorAll('.voice-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't select if clicking a button
      if (e.target.closest('.voice-btn')) return;
      
      const voiceId = card.dataset.voiceId;
      const voice = state.voices.find(v => v.id === voiceId);
      selectVoice(voice);
    });
  });
  
  // Preview buttons
  grid.querySelectorAll('.voice-btn.preview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const voiceId = btn.dataset.voice;
      previewVoice(voiceId);
    });
  });
  
  // Favorite buttons
  grid.querySelectorAll('.voice-btn.fav').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const voiceId = btn.dataset.voice;
      toggleFavorite(voiceId);
      btn.classList.toggle('active');
    });
  });
}

function extractVoiceName(voice) {
  // If voice has a custom display name (like extended Vietnamese voices), use it
  if (voice.name && (voice.isAlias || voice.category === 'trending' || voice.id?.startsWith('vi-custom') || voice.id?.startsWith('trending'))) {
    return voice.name;
  }
  
  // Try to extract from shortName first (e.g., "vi-VN-HoaiMyNeural" -> "Hoài My")
  const shortName = voice.shortName || voice.id || '';
  const parts = shortName.split('-');
  if (parts.length >= 3) {
    const rawName = parts.slice(2).join('-').replace('Neural', '').replace('Multilingual', '');
    // Insert space before uppercase letters
    const spaced = rawName.replace(/([a-z])([A-Z])/g, '$1 $2');
    if (spaced.trim()) return spaced.trim();
  }
  
  // Try to extract from FriendlyName
  const name = voice.name || '';
  // Pattern: "Microsoft HoaiMy Online (Natural) - Vietnamese (Vietnam)"
  const match = name.match(/Microsoft\s+(.+?)\s+Online/i);
  if (match) {
    const rawName = match[1];
    return rawName.replace(/([a-z])([A-Z])/g, '$1 $2').trim();
  }
  
  // Fallback: try to get just the name part before the language
  const dashMatch = name.match(/^(.+?)\s*[\-\(]/); 
  if (dashMatch) return dashMatch[1].trim();
  
  return name || shortName;
}

function selectVoice(voice) {
  state.selectedVoice = voice;
  
  // Update UI
  document.querySelectorAll('.voice-card').forEach(card => {
    card.classList.toggle('active', card.dataset.voiceId === voice.id);
  });
}

function filterVoices(query) {
  const q = query.toLowerCase();
  const filtered = state.filteredVoices.filter(v => {
    const name = (v.name || v.shortName).toLowerCase();
    return name.includes(q);
  });
  renderVoiceGrid(filtered);
}

async function previewVoice(voiceId) {
  // Find voice and resolve alias
  const voice = [...state.voices, ...trendingVoices].find(v => v.id === voiceId);
  const actualVoiceId = voice?.edgeVoice || voice?.shortName || voiceId;
  const rateOffset = voice?.rateOffset || 0;
  const pitchOffset = voice?.pitchOffset || 0;
  
  const sampleText = getLang() === 'vi' 
    ? 'Xin chào, đây là giọng đọc mẫu từ VibeTTS.'
    : 'Hello, this is a sample voice from VibeTTS.';
  
  try {
    showToast(getLang() === 'vi' ? 'Đang tải preview...' : 'Loading preview...', 'info');
    
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        text: sampleText, 
        voice: actualVoiceId,
        engine: voice?.engine || 'edge',
        rate: rateOffset, 
        pitch: pitchOffset 
      })
    });
    
    if (!res.ok) throw new Error('TTS failed');
    
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    
    // Play the preview
    if (state.audio) {
      state.audio.pause();
    }
    state.audio = new Audio(url);
    state.audio.play();
    
  } catch (e) {
    console.error('Preview failed:', e);
    showToast('Preview failed', 'error');
  }
}

function toggleFavorite(voiceId) {
  const index = state.favorites.indexOf(voiceId);
  if (index > -1) {
    state.favorites.splice(index, 1);
  } else {
    state.favorites.push(voiceId);
  }
  localStorage.setItem('vibettsFavorites', JSON.stringify(state.favorites));
  
  // Sync with server if logged in
  if (state.token) {
    fetch('/api/favorites/toggle', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.token}`
      },
      body: JSON.stringify({ voiceId })
    }).catch(console.error);
  }
}

// ==================== PARAGRAPHS ====================
function addParagraph() {
  const container = document.getElementById('paragraphsContainer');
  const id = state.paragraphs.length + 1;
  state.paragraphs.push({ id, text: '' });
  
  const block = document.createElement('div');
  block.className = 'paragraph-block';
  block.dataset.id = id;
  block.innerHTML = `
    <div class="paragraph-header">
      <span class="paragraph-label">${t('paragraphLabel')} ${id}</span>
      <button class="paragraph-remove" data-id="${id}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <textarea class="paragraph-textarea" placeholder="${t('textPlaceholder')}" data-paragraph="${id}"></textarea>
    <div class="paragraph-footer">
      <span class="char-count" data-count="${id}">0</span>
    </div>
  `;
  
  container.appendChild(block);
  
  // Add remove listener
  block.querySelector('.paragraph-remove').addEventListener('click', () => {
    block.remove();
    state.paragraphs = state.paragraphs.filter(p => p.id !== id);
  });
  
  // Add textarea listener
  setupTextareaListeners();
}

function setupTextareaListeners() {
  document.querySelectorAll('.paragraph-textarea').forEach(textarea => {
    textarea.removeEventListener('input', handleTextareaInput);
    textarea.addEventListener('input', handleTextareaInput);
  });
}

function handleTextareaInput(e) {
  const id = parseInt(e.target.dataset.paragraph);
  const para = state.paragraphs.find(p => p.id === id);
  if (para) para.text = e.target.value;
  
  const counter = document.querySelector(`.char-count[data-count="${id}"]`);
  if (counter) counter.textContent = e.target.value.length;
}

// ==================== GENERATE TTS ====================
async function handleGenerate() {
  if (state.isGenerating) return;
  
  // Validate
  if (!state.selectedVoice) {
    showToast(t('noVoice'), 'error');
    return;
  }
  
  // Get all paragraph texts
  const texts = [];
  document.querySelectorAll('.paragraph-textarea').forEach(ta => {
    if (ta.value.trim()) texts.push(ta.value.trim());
  });
  
  if (texts.length === 0) {
    showToast(t('noText'), 'error');
    return;
  }
  
  const genBtn = document.getElementById('generateBtn');
  state.isGenerating = true;
  genBtn.classList.add('loading');
  
  try {
    const rate = parseInt(document.getElementById('rateSlider')?.value || 0);
    const pitch = parseInt(document.getElementById('pitchSlider')?.value || 0);
    const volume = parseInt(document.getElementById('volumeSlider')?.value || 0);
    
    // Resolve voice alias
    const actualVoiceId = state.selectedVoice.edgeVoice || state.selectedVoice.shortName || state.selectedVoice.id;
    const voiceRateOffset = state.selectedVoice.rateOffset || 0;
    const voicePitchOffset = state.selectedVoice.pitchOffset || 0;
    
    let response;
    
    if (texts.length === 1) {
      // Single text
      response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: texts[0],
          voice: actualVoiceId,
          engine: state.selectedVoice.engine || 'edge',
          rate: rate + voiceRateOffset, 
          pitch: pitch + voicePitchOffset, 
          volume
        })
      });
    } else {
      // Batch
      const paragraphs = texts.map(text => ({
        text,
        voice: actualVoiceId,
        engine: state.selectedVoice.engine || 'edge',
        rate: rate + voiceRateOffset, 
        pitch: pitch + voicePitchOffset, 
        volume
      }));
      
      response = await fetch('/api/tts/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paragraphs })
      });
    }
    
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'TTS failed');
    }
    
    const blob = await response.blob();
    
    // Clean up old audio
    if (state.currentAudioUrl) {
      URL.revokeObjectURL(state.currentAudioUrl);
    }
    
    state.currentAudioUrl = URL.createObjectURL(blob);
    
    // Show player
    showAudioPlayer(state.currentAudioUrl, extractVoiceName(state.selectedVoice), texts[0]);
    
    showToast(t('ttsSuccess'), 'success');
    
    // Save to history
    if (state.token) {
      fetch('/api/history/add', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.token}`
        },
        body: JSON.stringify({ 
          text: texts.join('\n'), 
          voice: state.selectedVoice.id,
          voiceName: extractVoiceName(state.selectedVoice)
        })
      }).catch(console.error);
    }
    
  } catch (e) {
    console.error('TTS Error:', e);
    showToast(t('ttsError') + ' ' + e.message, 'error');
  } finally {
    state.isGenerating = false;
    genBtn.classList.remove('loading');
  }
}

// ==================== AUDIO PLAYER ====================
function showAudioPlayer(url, voiceName, textPreview) {
  const playerBar = document.getElementById('audioPlayerBar');
  playerBar.style.display = 'flex';
  
  document.getElementById('playerVoiceName').textContent = voiceName;
  document.getElementById('playerTextPreview').textContent = textPreview.substring(0, 60) + '...';
  
  // Create or update audio element
  if (state.audio) {
    state.audio.pause();
  }
  
  state.audio = new Audio(url);
  
  const playBtn = document.getElementById('playerPlayPause');
  const playIcon = playBtn.querySelector('.play-icon');
  const pauseIcon = playBtn.querySelector('.pause-icon');
  const progressFill = document.getElementById('playerProgressFill');
  const currentTimeEl = document.getElementById('playerCurrentTime');
  const durationEl = document.getElementById('playerDuration');
  const volumeSlider = document.getElementById('playerVolume');
  
  // Reset
  playIcon.style.display = 'block';
  pauseIcon.style.display = 'none';
  progressFill.style.width = '0%';
  currentTimeEl.textContent = '0:00';
  durationEl.textContent = '0:00';
  
  state.audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(state.audio.duration);
  });
  
  state.audio.addEventListener('timeupdate', () => {
    if (state.audio.duration) {
      const progress = (state.audio.currentTime / state.audio.duration) * 100;
      progressFill.style.width = progress + '%';
      currentTimeEl.textContent = formatTime(state.audio.currentTime);
    }
  });
  
  state.audio.addEventListener('ended', () => {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  });
  
  // Volume
  state.audio.volume = parseFloat(volumeSlider.value);
  
  // Auto play
  state.audio.play().then(() => {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  }).catch(console.error);
}

function setupPlayerControls() {
  // Play/Pause
  document.getElementById('playerPlayPause').addEventListener('click', () => {
    if (!state.audio) return;
    
    const playIcon = document.querySelector('#playerPlayPause .play-icon');
    const pauseIcon = document.querySelector('#playerPlayPause .pause-icon');
    
    if (state.audio.paused) {
      state.audio.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    } else {
      state.audio.pause();
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    }
  });
  
  // Progress bar click
  document.getElementById('playerProgress').addEventListener('click', (e) => {
    if (!state.audio || !state.audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    state.audio.currentTime = percent * state.audio.duration;
  });
  
  // Volume
  document.getElementById('playerVolume').addEventListener('input', (e) => {
    if (state.audio) {
      state.audio.volume = parseFloat(e.target.value);
    }
  });
  
  // Download
  document.getElementById('playerDownload').addEventListener('click', () => {
    if (!state.currentAudioUrl) return;
    const a = document.createElement('a');
    a.href = state.currentAudioUrl;
    a.download = `vibetts_${Date.now()}.mp3`;
    a.click();
    showToast(t('downloadSuccess'), 'success');
  });
}

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ==================== CLONE PAGE ====================
function initClonePage() {
  const cloneBtn = document.getElementById('cloneBtn');
  if (cloneBtn) {
    cloneBtn.addEventListener('click', () => {
      const name = document.getElementById('cloneName')?.value.trim();
      const link = document.getElementById('cloneLink')?.value.trim();
      
      if (!name || !link) {
        showToast(getLang() === 'vi' ? 'Vui lòng điền đầy đủ thông tin' : 'Please fill in all fields', 'error');
        return;
      }
      
      if (!link.includes('drive.google.com')) {
        showToast(getLang() === 'vi' ? 'Vui lòng nhập link Google Drive hợp lệ' : 'Please enter a valid Google Drive link', 'error');
        return;
      }
      
      showToast(getLang() === 'vi' ? 'Đã gửi yêu cầu nhân bản giọng nói!' : 'Voice clone request sent!', 'success');
    });
  }
}

// ==================== STT PAGE ====================
function initSttPage() {
  const sttBtn = document.getElementById('sttBtn');
  if (sttBtn) {
    sttBtn.addEventListener('click', () => {
      const link = document.getElementById('sttLink')?.value.trim();
      
      if (!link) {
        showToast(getLang() === 'vi' ? 'Vui lòng nhập link Google Drive' : 'Please enter a Google Drive link', 'error');
        return;
      }
      
      showToast(getLang() === 'vi' ? 'Đã gửi yêu cầu chuyển đổi!' : 'Conversion request sent!', 'success');
    });
  }
}

// ==================== HISTORY PAGE ====================
async function loadAndRenderHistory() {
  const pageContent = document.getElementById('pageContent');
  
  if (!state.token) {
    pageContent.innerHTML = renderHistoryPage([]);
    return;
  }
  
  try {
    const res = await fetch('/api/history', {
      headers: { 'Authorization': `Bearer ${state.token}` }
    });
    const data = await res.json();
    pageContent.innerHTML = renderHistoryPage(data.history || []);
  } catch (e) {
    pageContent.innerHTML = renderHistoryPage([]);
  }
}

// ==================== TOAST ====================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
