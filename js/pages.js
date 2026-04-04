// Page templates for the SPA
import { t, getLang } from './i18n.js';

export function renderHomePage() {
  return `
    <div class="fade-in">
      <!-- Hero Section -->
      <div class="hero-section">
        <h1 class="hero-title">${t('heroTitle')}</h1>
        <p class="hero-subtitle">${t('heroSubtitle')}</p>
      </div>

      <!-- Announcement Card -->
      <div class="announcement-card">
        <div class="announcement-icon">⚠️</div>
        <div class="announcement-content">
          <h3>${t('announcementTitle')}</h3>
          <p>${t('announcementText')}</p>
          <div class="announcement-buttons">
            <a href="https://t.me/ttsohfree_group" target="_blank" class="btn-outline btn-telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.904-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.492-1.302.484-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141a.506.506 0 01.171.325c.016.093.036.306.02.472z"/></svg>
              ${t('btnTelegramGroup')}
            </a>
            <a href="https://t.me/ttsohfree_channel" target="_blank" class="btn-outline btn-channel">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
              ${t('btnTelegramChannel')}
            </a>
          </div>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="feature-grid">
        <div class="feature-card" data-navigate="#/voice-clone">
          <span class="card-badge hot">HOT</span>
          <div class="feature-card-icon blue">🎙️</div>
          <div class="feature-card-title">${t('featureClone')}</div>
        </div>
        <div class="feature-card" data-navigate="#/mp3-to-text">
          <span class="card-badge new">MỚI</span>
          <div class="feature-card-icon green">📝</div>
          <div class="feature-card-title">${t('featureStt')}</div>
        </div>
        <div class="feature-card">
          <span class="card-badge soon">SẮP CÓ</span>
          <div class="feature-card-icon orange">🔊</div>
          <div class="feature-card-title">${t('featureTts')}</div>
        </div>
        <div class="feature-card">
          <span class="card-badge soon">SẮP CÓ</span>
          <div class="feature-card-icon pink">🎬</div>
          <div class="feature-card-title">${t('featureVideo')}</div>
        </div>
      </div>

      <!-- TTS Section -->
      <div class="tts-section slide-up">
        <h2 style="font-size:20px;font-weight:800;margin-bottom:6px;display:flex;align-items:center;gap:8px">
          <span style="font-size:24px">🔊</span> ${getLang() === 'vi' ? 'Văn bản sang Âm thanh' : 'Text to Speech'}
        </h2>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:24px">${getLang() === 'vi' ? 'Chuyển đổi văn bản thành giọng nói AI tự nhiên' : 'Convert text into natural AI speech'}</p>

        <!-- Voice Category Tabs -->
        <div class="voice-tabs" id="voiceTabs">
          <button class="voice-tab active" data-tab="default">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            ${getLang() === 'vi' ? 'Mặc định' : 'Default'}
          </button>
          <button class="voice-tab" data-tab="trending">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            ${getLang() === 'vi' ? 'Thịnh hành' : 'Trending'}
          </button>
          <button class="voice-tab" data-tab="favorites">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            ${getLang() === 'vi' ? 'Yêu thích' : 'Favorites'}
          </button>
        </div>

        <!-- Step 1: Choose Country -->
        <div class="section-step">
          <div class="step-header">
            <div class="step-number">1</div>
            <div class="step-title">${t('step1Title')}</div>
          </div>
          <div class="country-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="countrySearch" placeholder="${t('searchCountry')}">
          </div>
          <div class="country-carousel-wrapper">
            <button class="carousel-btn left" id="carouselLeft">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div class="country-carousel" id="countryCarousel">
              <!-- Countries loaded dynamically -->
              <div class="loading-skeleton" style="width:80px;height:90px"></div>
              <div class="loading-skeleton" style="width:80px;height:90px"></div>
              <div class="loading-skeleton" style="width:80px;height:90px"></div>
              <div class="loading-skeleton" style="width:80px;height:90px"></div>
              <div class="loading-skeleton" style="width:80px;height:90px"></div>
            </div>
            <button class="carousel-btn right" id="carouselRight">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        <!-- Step 2: Choose Voice -->
        <div class="section-step">
          <div class="step-header">
            <div class="step-number">2</div>
            <div class="step-title">${t('step2Title')}</div>
          </div>
          <div class="voice-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="voiceSearch" placeholder="${t('searchVoice')}">
          </div>
          <div class="voice-grid" id="voiceGrid">
            <!-- Voices loaded dynamically -->
            <div class="loading-skeleton" style="height:68px"></div>
            <div class="loading-skeleton" style="height:68px"></div>
            <div class="loading-skeleton" style="height:68px"></div>
            <div class="loading-skeleton" style="height:68px"></div>
          </div>
        </div>

        <!-- Emotion Toggle -->
        <div class="emotion-toggle">
          <div class="emotion-label">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 007.92 12.446A9 9 0 1112 3z"/><path d="M2 12h1M12 2v1M18.5 5.5l-.7.7M5.5 5.5l.7.7"/></svg>
            ${t('emotionToggle')}
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="emotionCheckbox" checked>
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Advanced Controls -->
        <div class="advanced-controls">
          <div class="advanced-controls-header" id="advancedToggle">
            <h4>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
              ${t('advancedControls')}
            </h4>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="advanced-controls-body" id="advancedBody">
            <div class="control-row">
              <span class="control-label">${t('speed')}</span>
              <input type="range" class="control-slider" id="rateSlider" min="-50" max="100" value="0" step="5">
              <span class="control-value" id="rateValue">0%</span>
            </div>
            <div class="control-row">
              <span class="control-label">${t('pitch')}</span>
              <input type="range" class="control-slider" id="pitchSlider" min="-50" max="50" value="0" step="5">
              <span class="control-value" id="pitchValue">0Hz</span>
            </div>
            <div class="control-row">
              <span class="control-label">${t('volume')}</span>
              <input type="range" class="control-slider" id="volumeSlider" min="-50" max="100" value="0" step="5">
              <span class="control-value" id="volumeValue">0%</span>
            </div>
          </div>
        </div>

        <!-- Step 3: Enter Text -->
        <div class="section-step">
          <div class="step-header">
            <div class="step-number">3</div>
            <div class="step-title">${t('step3Title')}</div>
          </div>
          <div class="paragraphs-header">
            <span></span>
            <button class="btn-add-paragraph" id="addParagraphBtn">${t('addParagraph')}</button>
          </div>
          <div id="paragraphsContainer">
            <div class="paragraph-block" data-id="1">
              <div class="paragraph-header">
                <span class="paragraph-label">${t('paragraphLabel')} 1</span>
              </div>
              <textarea class="paragraph-textarea" placeholder="${t('textPlaceholder')}" data-paragraph="1"></textarea>
              <div class="paragraph-footer">
                <span class="char-count" data-count="1">0</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Generate Button -->
        <button class="btn-generate" id="generateBtn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span class="btn-text">${t('generateBtn')}</span>
          <div class="spinner"></div>
        </button>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>${t('footer')} <a href="https://t.me/ttsohfree_group" target="_blank">VibeTTS Team</a></p>
      </div>
    </div>
  `;
}

export function renderClonePage() {
  return `
    <div class="clone-page fade-in">
      <div class="clone-hero">
        <h1>${t('cloneTitle')} 🎙️</h1>
        <p>${t('cloneSubtitle')}</p>
      </div>
      <div class="clone-card">
        <div class="clone-form-group">
          <label>${t('cloneNameLabel')}</label>
          <input type="text" id="cloneName" placeholder="${t('cloneNamePlaceholder')}">
        </div>
        <div class="clone-form-group">
          <label>${t('cloneLinkLabel')}</label>
          <input type="text" id="cloneLink" placeholder="${t('cloneLinkPlaceholder')}">
        </div>
        <div class="clone-info">
          <strong>📝 ${getLang() === 'vi' ? 'Hướng dẫn' : 'Instructions'}:</strong><br>
          ${t('cloneInfo')}<br><br>
          <strong>${getLang() === 'vi' ? 'Định dạng hỗ trợ' : 'Supported formats'}:</strong> .mp3, .wav, .mp4<br>
          <strong>${getLang() === 'vi' ? 'Dung lượng tối đa' : 'Max size'}:</strong> 1GB
        </div>
        <button class="btn-clone" id="cloneBtn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:middle;margin-right:8px"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/></svg>
          ${t('cloneBtn')}
        </button>
      </div>
    </div>
  `;
}

export function renderSttPage() {
  return `
    <div class="stt-page fade-in">
      <div class="clone-hero">
        <h1>${t('sttTitle')} 📝</h1>
        <p>${t('sttSubtitle')}</p>
      </div>
      <div class="clone-card">
        <div class="clone-form-group">
          <label>${t('sttLinkLabel')}</label>
          <input type="text" id="sttLink" placeholder="${t('sttLinkPlaceholder')}">
        </div>
        <div class="clone-form-group">
          <label>${t('sttFormatLabel')}</label>
          <div style="display:flex;gap:12px;margin-top:8px">
            <label style="display:flex;align-items:center;gap:8px;padding:12px 20px;border:2px solid var(--border-color);border-radius:var(--radius-md);cursor:pointer;flex:1;transition:all 0.2s">
              <input type="radio" name="sttFormat" value="text" checked style="accent-color:var(--brand-primary)">
              <span style="font-size:14px;font-weight:600">${t('sttFormatText')}</span>
            </label>
            <label style="display:flex;align-items:center;gap:8px;padding:12px 20px;border:2px solid var(--border-color);border-radius:var(--radius-md);cursor:pointer;flex:1;transition:all 0.2s">
              <input type="radio" name="sttFormat" value="srt" style="accent-color:var(--brand-primary)">
              <span style="font-size:14px;font-weight:600">${t('sttFormatSrt')}</span>
            </label>
          </div>
        </div>
        <div class="clone-info">
          <strong>📝 ${getLang() === 'vi' ? 'Hướng dẫn' : 'Instructions'}:</strong><br>
          ${t('cloneInfo')}
        </div>
        <button class="btn-clone" id="sttBtn">${t('sttBtn')}</button>
      </div>
    </div>
  `;
}

export function renderLeaderboardPage() {
  const donors = [
    { name: 'Anonymous Hero', amount: '500,000 VND' },
    { name: 'Nguyễn Văn A', amount: '200,000 VND' },
    { name: 'Trần Thị B', amount: '150,000 VND' },
    { name: 'Le Van C', amount: '100,000 VND' },
    { name: 'Hoàng D', amount: '50,000 VND' },
  ];

  return `
    <div class="leaderboard-page fade-in">
      <div class="leaderboard-hero">
        <h1>${t('leaderboardTitle')}</h1>
      </div>
      <div class="leaderboard-card">
        <table class="leaderboard-table">
          <thead>
            <tr>
              <th>${t('leaderboardRank')}</th>
              <th>${t('leaderboardName')}</th>
              <th>${t('leaderboardAmount')}</th>
            </tr>
          </thead>
          <tbody>
            ${donors.map((d, i) => `
              <tr>
                <td>
                  <span class="rank-badge ${i < 3 ? `rank-${i+1}` : 'rank-other'}">${i+1}</span>
                </td>
                <td style="font-weight:600">${d.name}</td>
                <td style="color:var(--brand-primary);font-weight:600">${d.amount}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="donate-section">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:8px">${getLang() === 'vi' ? '💝 Ủng hộ VibeTTS' : '💝 Support VibeTTS'}</h3>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px">
          ${getLang() === 'vi' ? 'Mọi khoản đóng góp giúp chúng tôi duy trì và phát triển dịch vụ' : 'Every donation helps us maintain and develop the service'}
        </p>
        <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-xl);padding:24px;display:inline-flex;flex-direction:column;align-items:center;gap:16px;">
          <img src="/qr-cung-duong.png" alt="QR Cúng Dường" style="width:200px;height:200px;border-radius:var(--radius-md);border:1px solid var(--border-color);" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzhkOGQ4ZCIgZHk9Ii4zZW0iPkFuaCBRUjwvdGV4dD48L3N2Zz4='"/>
          <div style="text-align:center;">
            <p style="font-size:16px;font-weight:700;margin-bottom:8px;color:var(--brand-primary)">MBB: 120028888</p>
            <p style="font-size:14px;font-weight:600;color:var(--text-secondary)">NGUYEN DAC TOAN</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderHistoryPage(history = []) {
  return `
    <div class="history-page fade-in">
      <div class="clone-hero">
        <h1>${t('historyTitle')} 🎤</h1>
      </div>
      ${history.length === 0 ? `
        <div class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
            <path d="M19 10v2a7 7 0 01-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
          <h3>${t('historyEmpty')}</h3>
          <p>${t('historyEmptyDesc')}</p>
        </div>
      ` : `
        <div class="history-list">
          ${history.map(item => `
            <div class="history-item">
              <span class="history-voice-badge">${item.voiceName || item.voice}</span>
              <span class="history-text">${item.text}</span>
              <span class="history-date">${new Date(item.date).toLocaleDateString()}</span>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}
