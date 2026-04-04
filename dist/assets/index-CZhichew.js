(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const S={vi:{menuLabel:"MENU CÔNG CỤ",navHome:"Trang chủ",navClone:"Nhân bản giọng nói",navStt:"MP3 sang văn bản",navLeaderboard:"Cúng dường",navHistory:"Giọng clone của bạn",loginBtn:"ĐĂNG NHẬP NGAY",loginTitle:"Đăng nhập VibeTTS",loginSubtitle:"Đăng nhập để sử dụng đầy đủ tính năng",tabLogin:"Đăng nhập",tabRegister:"Đăng ký",labelUsername:"Tên đăng nhập",labelPassword:"Mật khẩu",btnLogin:"Đăng nhập",btnRegister:"Đăng ký",heroTitle:"Ép Máy Rặn Chữ Thành Tiếng",heroSubtitle:"Web mở xài chùa không giới hạn ký tự. Hỗ trợ 400+ giọng đọc AI tự nhiên đa ngôn ngữ.",announcementTitle:"Thông Báo Khẩn!",announcementText:"Tham gia cộng đồng và kênh thông báo chính thức của VibeTTS trên Telegram! Cập nhật tính năng mới, mẹo sử dụng và quyền lợi VIP.",btnTelegramGroup:"Tham gia Nhóm Chat",btnTelegramChannel:"Vào Kênh Thông Báo",featureClone:"Nhân bản giọng nói",featureStt:"MP3 sang văn bản",featureTts:"Văn bản sang MP3",featureVideo:"Nhép Môi (Video)",step1Title:"Chọn Quốc Gia",step2Title:"Chọn Tone Giọng",step3Title:"Lời dặn dò của sếp:",searchCountry:"Tìm quốc gia...",searchVoice:"Tìm tên giọng đọc...",emotionToggle:"Cảm xúc như người thật",addParagraph:"+ Thêm đoạn",paragraphLabel:"ĐOẠN",textPlaceholder:"Sếp nhập văn bản vào đây nhé...",generateBtn:"BẮT ĐẦU RẶN CHỮ",generating:"Đang xử lý...",advancedControls:"Điều chỉnh nâng cao",speed:"Tốc độ",pitch:"Cao độ",volume:"Âm lượng",cloneTitle:"Nhân Bản Giọng Nói AI",cloneSubtitle:"Tạo giọng AI giống hệt giọng bạn hoặc bất kỳ ai",cloneNameLabel:"Tên giọng clone",cloneNamePlaceholder:"VD: David Beckham",cloneLinkLabel:"Link Google Drive (file .mp3, .wav, .mp4)",cloneLinkPlaceholder:"https://drive.google.com/file/d/...",cloneInfo:"File phải được chia sẻ công khai (Anyone with the link). Hỗ trợ file lên đến 1GB.",cloneBtn:"Bắt đầu nhân bản",sttTitle:"Chuyển MP3 Sang Văn Bản",sttSubtitle:"Chuyển đổi file âm thanh thành văn bản hoặc phụ đề SRT",sttLinkLabel:"Link Google Drive (file .mp3, .wav, .mp4)",sttLinkPlaceholder:"https://drive.google.com/file/d/...",sttFormatLabel:"Định dạng đầu ra",sttFormatText:"Văn bản thuần",sttFormatSrt:"Phụ đề SRT",sttBtn:"Bắt đầu chuyển đổi",leaderboardTitle:"🏆 Bảng Cúng Dường",leaderboardRank:"Hạng",leaderboardName:"Tên",leaderboardAmount:"Số tiền",historyTitle:"Giọng Clone Của Bạn",historyEmpty:"Bạn chưa có giọng clone nào",historyEmptyDesc:'Hãy thử tạo giọng clone mới từ mục "Nhân bản giọng nói"',footer:"Bản quyền © 2026 thuộc về",downloadSuccess:"Tải xuống thành công!",ttsSuccess:"Chuyển đổi thành công!",ttsError:"Lỗi chuyển đổi. Vui lòng thử lại.",loginSuccess:"Đăng nhập thành công!",logoutSuccess:"Đăng xuất thành công!",noText:"Vui lòng nhập văn bản",noVoice:"Vui lòng chọn giọng đọc"},en:{menuLabel:"TOOL MENU",navHome:"Home",navClone:"Voice Clone",navStt:"MP3 to Text",navLeaderboard:"Donations",navHistory:"Your Cloned Voices",loginBtn:"LOGIN NOW",loginTitle:"Login to VibeTTS",loginSubtitle:"Login to access all features",tabLogin:"Login",tabRegister:"Register",labelUsername:"Username",labelPassword:"Password",btnLogin:"Login",btnRegister:"Register",heroTitle:"AI Text to Speech Engine",heroSubtitle:"Unlimited free usage. Support 400+ natural AI voices in multiple languages.",announcementTitle:"Announcement!",announcementText:"Join our community and announcement channel on Telegram! Get the latest features, tips, and VIP benefits.",btnTelegramGroup:"Join Chat Group",btnTelegramChannel:"Join Channel",featureClone:"Voice Cloning",featureStt:"MP3 to Text",featureTts:"Text to MP3",featureVideo:"Lip Sync (Video)",step1Title:"Select Country",step2Title:"Select Voice",step3Title:"Enter your text:",searchCountry:"Search country...",searchVoice:"Search voice name...",emotionToggle:"Realistic emotion",addParagraph:"+ Add paragraph",paragraphLabel:"PARAGRAPH",textPlaceholder:"Enter your text here...",generateBtn:"START GENERATING",generating:"Processing...",advancedControls:"Advanced Controls",speed:"Speed",pitch:"Pitch",volume:"Volume",cloneTitle:"AI Voice Cloning",cloneSubtitle:"Create an AI voice that sounds just like you or anyone",cloneNameLabel:"Clone voice name",cloneNamePlaceholder:"e.g. David Beckham",cloneLinkLabel:"Google Drive link (.mp3, .wav, .mp4)",cloneLinkPlaceholder:"https://drive.google.com/file/d/...",cloneInfo:"File must be shared publicly (Anyone with the link). Supports files up to 1GB.",cloneBtn:"Start Cloning",sttTitle:"Convert MP3 to Text",sttSubtitle:"Convert audio files to text or SRT subtitles",sttLinkLabel:"Google Drive link (.mp3, .wav, .mp4)",sttLinkPlaceholder:"https://drive.google.com/file/d/...",sttFormatLabel:"Output format",sttFormatText:"Plain text",sttFormatSrt:"SRT Subtitle",sttBtn:"Start Converting",leaderboardTitle:"🏆 Donation Leaderboard",leaderboardRank:"Rank",leaderboardName:"Name",leaderboardAmount:"Amount",historyTitle:"Your Cloned Voices",historyEmpty:"No cloned voices yet",historyEmptyDesc:'Try creating a new cloned voice from "Voice Clone"',footer:"Copyright © 2026 by",downloadSuccess:"Download successful!",ttsSuccess:"Conversion successful!",ttsError:"Conversion error. Please try again.",loginSuccess:"Login successful!",logoutSuccess:"Logout successful!",noText:"Please enter text",noVoice:"Please select a voice"}};let p=localStorage.getItem("vibettsLang")||"vi";function l(e){var t;return((t=S[p])==null?void 0:t[e])||S.vi[e]||e}function u(){return p}function U(e){p=e,localStorage.setItem("vibettsLang",e),A()}function z(){return U(p==="vi"?"en":"vi"),p}function A(){document.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.getAttribute("data-i18n");e.textContent=l(t)})}function q(){A();const e=document.getElementById("langLabel");e&&(e.textContent=p.toUpperCase())}const k=[{code:"VN",name:"Vietnam",nameEn:"Vietnam",flag:"🇻🇳",locale:"vi-VN"},{code:"US",name:"Mỹ",nameEn:"United States",flag:"🇺🇸",locale:"en-US"},{code:"GB",name:"Anh",nameEn:"United Kingdom",flag:"🇬🇧",locale:"en-GB"},{code:"CN",name:"Trung Quốc",nameEn:"China",flag:"🇨🇳",locale:"zh-CN"},{code:"JP",name:"Nhật Bản",nameEn:"Japan",flag:"🇯🇵",locale:"ja-JP"},{code:"KR",name:"Hàn Quốc",nameEn:"South Korea",flag:"🇰🇷",locale:"ko-KR"},{code:"FR",name:"Pháp",nameEn:"France",flag:"🇫🇷",locale:"fr-FR"},{code:"DE",name:"Đức",nameEn:"Germany",flag:"🇩🇪",locale:"de-DE"},{code:"ES",name:"Tây Ban Nha",nameEn:"Spain",flag:"🇪🇸",locale:"es-ES"},{code:"IT",name:"Ý",nameEn:"Italy",flag:"🇮🇹",locale:"it-IT"},{code:"PT",name:"Bồ Đào Nha",nameEn:"Portugal",flag:"🇵🇹",locale:"pt-PT"},{code:"BR",name:"Brazil",nameEn:"Brazil",flag:"🇧🇷",locale:"pt-BR"},{code:"RU",name:"Nga",nameEn:"Russia",flag:"🇷🇺",locale:"ru-RU"},{code:"IN",name:"Ấn Độ",nameEn:"India",flag:"🇮🇳",locale:"hi-IN"},{code:"TH",name:"Thái Lan",nameEn:"Thailand",flag:"🇹🇭",locale:"th-TH"},{code:"ID",name:"Indonesia",nameEn:"Indonesia",flag:"🇮🇩",locale:"id-ID"},{code:"MY",name:"Malaysia",nameEn:"Malaysia",flag:"🇲🇾",locale:"ms-MY"},{code:"PH",name:"Philippines",nameEn:"Philippines",flag:"🇵🇭",locale:"fil-PH"},{code:"AR",name:"Argentina",nameEn:"Argentina",flag:"🇦🇷",locale:"es-AR"},{code:"MX",name:"Mexico",nameEn:"Mexico",flag:"🇲🇽",locale:"es-MX"},{code:"TR",name:"Thổ Nhĩ Kỳ",nameEn:"Turkey",flag:"🇹🇷",locale:"tr-TR"},{code:"PL",name:"Ba Lan",nameEn:"Poland",flag:"🇵🇱",locale:"pl-PL"},{code:"NL",name:"Hà Lan",nameEn:"Netherlands",flag:"🇳🇱",locale:"nl-NL"},{code:"SE",name:"Thụy Điển",nameEn:"Sweden",flag:"🇸🇪",locale:"sv-SE"},{code:"NO",name:"Na Uy",nameEn:"Norway",flag:"🇳🇴",locale:"nb-NO"},{code:"DK",name:"Đan Mạch",nameEn:"Denmark",flag:"🇩🇰",locale:"da-DK"},{code:"FI",name:"Phần Lan",nameEn:"Finland",flag:"🇫🇮",locale:"fi-FI"},{code:"CZ",name:"Séc",nameEn:"Czech Republic",flag:"🇨🇿",locale:"cs-CZ"},{code:"GR",name:"Hy Lạp",nameEn:"Greece",flag:"🇬🇷",locale:"el-GR"},{code:"HU",name:"Hungary",nameEn:"Hungary",flag:"🇭🇺",locale:"hu-HU"},{code:"RO",name:"Romania",nameEn:"Romania",flag:"🇷🇴",locale:"ro-RO"},{code:"BG",name:"Bulgaria",nameEn:"Bulgaria",flag:"🇧🇬",locale:"bg-BG"},{code:"UA",name:"Ukraine",nameEn:"Ukraine",flag:"🇺🇦",locale:"uk-UA"},{code:"SA",name:"Ả Rập Saudi",nameEn:"Saudi Arabia",flag:"🇸🇦",locale:"ar-SA"},{code:"EG",name:"Ai Cập",nameEn:"Egypt",flag:"🇪🇬",locale:"ar-EG"},{code:"IL",name:"Israel",nameEn:"Israel",flag:"🇮🇱",locale:"he-IL"},{code:"ZA",name:"Nam Phi",nameEn:"South Africa",flag:"🇿🇦",locale:"af-ZA"},{code:"AU",name:"Úc",nameEn:"Australia",flag:"🇦🇺",locale:"en-AU"},{code:"CA",name:"Canada",nameEn:"Canada",flag:"🇨🇦",locale:"en-CA"},{code:"IE",name:"Ireland",nameEn:"Ireland",flag:"🇮🇪",locale:"en-IE"},{code:"HK",name:"Hồng Kông",nameEn:"Hong Kong",flag:"🇭🇰",locale:"zh-HK"},{code:"TW",name:"Đài Loan",nameEn:"Taiwan",flag:"🇹🇼",locale:"zh-TW"},{code:"BD",name:"Bangladesh",nameEn:"Bangladesh",flag:"🇧🇩",locale:"bn-BD"},{code:"BH",name:"Bahrain",nameEn:"Bahrain",flag:"🇧🇭",locale:"ar-BH"},{code:"GE",name:"Georgia",nameEn:"Georgia",flag:"🇬🇪",locale:"ka-GE"},{code:"IR",name:"Iran",nameEn:"Iran",flag:"🇮🇷",locale:"fa-IR"}];function j(e){const t=new Map;e.forEach(o=>{const i=o.locale?o.locale.split("-"):o.shortName.split("-"),r=i[0],c=i[1]||r,s=k.find(d=>d.locale===o.locale||d.code===c.toUpperCase());s&&!t.has(s.code)&&t.set(s.code,{...s,voiceCount:0}),s&&t.has(s.code)&&t.get(s.code).voiceCount++});const n=Array.from(t.values());return n.sort((o,i)=>o.code==="VN"?-1:i.code==="VN"?1:i.voiceCount-o.voiceCount),n}function w(){return`
    <div class="fade-in">
      <!-- Hero Section -->
      <div class="hero-section">
        <h1 class="hero-title">${l("heroTitle")}</h1>
        <p class="hero-subtitle">${l("heroSubtitle")}</p>
      </div>

      <!-- Announcement Card -->
      <div class="announcement-card">
        <div class="announcement-icon">⚠️</div>
        <div class="announcement-content">
          <h3>${l("announcementTitle")}</h3>
          <p>${l("announcementText")}</p>
          <div class="announcement-buttons">
            <a href="https://t.me/ttsohfree_group" target="_blank" class="btn-outline btn-telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.904-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.492-1.302.484-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141a.506.506 0 01.171.325c.016.093.036.306.02.472z"/></svg>
              ${l("btnTelegramGroup")}
            </a>
            <a href="https://t.me/ttsohfree_channel" target="_blank" class="btn-outline btn-channel">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
              ${l("btnTelegramChannel")}
            </a>
          </div>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="feature-grid">
        <div class="feature-card" data-navigate="#/voice-clone">
          <span class="card-badge hot">HOT</span>
          <div class="feature-card-icon blue">🎙️</div>
          <div class="feature-card-title">${l("featureClone")}</div>
        </div>
        <div class="feature-card" data-navigate="#/mp3-to-text">
          <span class="card-badge new">MỚI</span>
          <div class="feature-card-icon green">📝</div>
          <div class="feature-card-title">${l("featureStt")}</div>
        </div>
        <div class="feature-card">
          <span class="card-badge soon">SẮP CÓ</span>
          <div class="feature-card-icon orange">🔊</div>
          <div class="feature-card-title">${l("featureTts")}</div>
        </div>
        <div class="feature-card">
          <span class="card-badge soon">SẮP CÓ</span>
          <div class="feature-card-icon pink">🎬</div>
          <div class="feature-card-title">${l("featureVideo")}</div>
        </div>
      </div>

      <!-- TTS Section -->
      <div class="tts-section slide-up">
        <h2 style="font-size:20px;font-weight:800;margin-bottom:6px;display:flex;align-items:center;gap:8px">
          <span style="font-size:24px">🔊</span> ${u()==="vi"?"Văn bản sang Âm thanh":"Text to Speech"}
        </h2>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:24px">${u()==="vi"?"Chuyển đổi văn bản thành giọng nói AI tự nhiên":"Convert text into natural AI speech"}</p>

        <!-- Voice Category Tabs -->
        <div class="voice-tabs" id="voiceTabs">
          <button class="voice-tab active" data-tab="default">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            ${u()==="vi"?"Mặc định":"Default"}
          </button>
          <button class="voice-tab" data-tab="trending">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            ${u()==="vi"?"Thịnh hành":"Trending"}
          </button>
          <button class="voice-tab" data-tab="favorites">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            ${u()==="vi"?"Yêu thích":"Favorites"}
          </button>
        </div>

        <!-- Step 1: Choose Country -->
        <div class="section-step">
          <div class="step-header">
            <div class="step-number">1</div>
            <div class="step-title">${l("step1Title")}</div>
          </div>
          <div class="country-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="countrySearch" placeholder="${l("searchCountry")}">
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
            <div class="step-title">${l("step2Title")}</div>
          </div>
          <div class="voice-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="voiceSearch" placeholder="${l("searchVoice")}">
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
            ${l("emotionToggle")}
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
              ${l("advancedControls")}
            </h4>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="advanced-controls-body" id="advancedBody">
            <div class="control-row">
              <span class="control-label">${l("speed")}</span>
              <input type="range" class="control-slider" id="rateSlider" min="-50" max="100" value="0" step="5">
              <span class="control-value" id="rateValue">0%</span>
            </div>
            <div class="control-row">
              <span class="control-label">${l("pitch")}</span>
              <input type="range" class="control-slider" id="pitchSlider" min="-50" max="50" value="0" step="5">
              <span class="control-value" id="pitchValue">0Hz</span>
            </div>
            <div class="control-row">
              <span class="control-label">${l("volume")}</span>
              <input type="range" class="control-slider" id="volumeSlider" min="-50" max="100" value="0" step="5">
              <span class="control-value" id="volumeValue">0%</span>
            </div>
          </div>
        </div>

        <!-- Step 3: Enter Text -->
        <div class="section-step">
          <div class="step-header">
            <div class="step-number">3</div>
            <div class="step-title">${l("step3Title")}</div>
          </div>
          <div class="paragraphs-header">
            <span></span>
            <button class="btn-add-paragraph" id="addParagraphBtn">${l("addParagraph")}</button>
          </div>
          <div id="paragraphsContainer">
            <div class="paragraph-block" data-id="1">
              <div class="paragraph-header">
                <span class="paragraph-label">${l("paragraphLabel")} 1</span>
              </div>
              <textarea class="paragraph-textarea" placeholder="${l("textPlaceholder")}" data-paragraph="1"></textarea>
              <div class="paragraph-footer">
                <span class="char-count" data-count="1">0</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Generate Button -->
        <button class="btn-generate" id="generateBtn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span class="btn-text">${l("generateBtn")}</span>
          <div class="spinner"></div>
        </button>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>${l("footer")} <a href="https://t.me/ttsohfree_group" target="_blank">VibeTTS Team</a></p>
      </div>
    </div>
  `}function Z(){return`
    <div class="clone-page fade-in">
      <div class="clone-hero">
        <h1>${l("cloneTitle")} 🎙️</h1>
        <p>${l("cloneSubtitle")}</p>
      </div>
      <div class="clone-card">
        <div class="clone-form-group">
          <label>${l("cloneNameLabel")}</label>
          <input type="text" id="cloneName" placeholder="${l("cloneNamePlaceholder")}">
        </div>
        <div class="clone-form-group">
          <label>${l("cloneLinkLabel")}</label>
          <input type="text" id="cloneLink" placeholder="${l("cloneLinkPlaceholder")}">
        </div>
        <div class="clone-info">
          <strong>📝 ${u()==="vi"?"Hướng dẫn":"Instructions"}:</strong><br>
          ${l("cloneInfo")}<br><br>
          <strong>${u()==="vi"?"Định dạng hỗ trợ":"Supported formats"}:</strong> .mp3, .wav, .mp4<br>
          <strong>${u()==="vi"?"Dung lượng tối đa":"Max size"}:</strong> 1GB
        </div>
        <button class="btn-clone" id="cloneBtn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:middle;margin-right:8px"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/></svg>
          ${l("cloneBtn")}
        </button>
      </div>
    </div>
  `}function J(){return`
    <div class="stt-page fade-in">
      <div class="clone-hero">
        <h1>${l("sttTitle")} 📝</h1>
        <p>${l("sttSubtitle")}</p>
      </div>
      <div class="clone-card">
        <div class="clone-form-group">
          <label>${l("sttLinkLabel")}</label>
          <input type="text" id="sttLink" placeholder="${l("sttLinkPlaceholder")}">
        </div>
        <div class="clone-form-group">
          <label>${l("sttFormatLabel")}</label>
          <div style="display:flex;gap:12px;margin-top:8px">
            <label style="display:flex;align-items:center;gap:8px;padding:12px 20px;border:2px solid var(--border-color);border-radius:var(--radius-md);cursor:pointer;flex:1;transition:all 0.2s">
              <input type="radio" name="sttFormat" value="text" checked style="accent-color:var(--brand-primary)">
              <span style="font-size:14px;font-weight:600">${l("sttFormatText")}</span>
            </label>
            <label style="display:flex;align-items:center;gap:8px;padding:12px 20px;border:2px solid var(--border-color);border-radius:var(--radius-md);cursor:pointer;flex:1;transition:all 0.2s">
              <input type="radio" name="sttFormat" value="srt" style="accent-color:var(--brand-primary)">
              <span style="font-size:14px;font-weight:600">${l("sttFormatSrt")}</span>
            </label>
          </div>
        </div>
        <div class="clone-info">
          <strong>📝 ${u()==="vi"?"Hướng dẫn":"Instructions"}:</strong><br>
          ${l("cloneInfo")}
        </div>
        <button class="btn-clone" id="sttBtn">${l("sttBtn")}</button>
      </div>
    </div>
  `}function K(){const e=[{name:"Anonymous Hero",amount:"500,000 VND"},{name:"Nguyễn Văn A",amount:"200,000 VND"},{name:"Trần Thị B",amount:"150,000 VND"},{name:"Le Van C",amount:"100,000 VND"},{name:"Hoàng D",amount:"50,000 VND"}];return`
    <div class="leaderboard-page fade-in">
      <div class="leaderboard-hero">
        <h1>${l("leaderboardTitle")}</h1>
      </div>
      <div class="leaderboard-card">
        <table class="leaderboard-table">
          <thead>
            <tr>
              <th>${l("leaderboardRank")}</th>
              <th>${l("leaderboardName")}</th>
              <th>${l("leaderboardAmount")}</th>
            </tr>
          </thead>
          <tbody>
            ${e.map((t,n)=>`
              <tr>
                <td>
                  <span class="rank-badge ${n<3?`rank-${n+1}`:"rank-other"}">${n+1}</span>
                </td>
                <td style="font-weight:600">${t.name}</td>
                <td style="color:var(--brand-primary);font-weight:600">${t.amount}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div class="donate-section">
        <h3 style="font-size:18px;font-weight:700;margin-bottom:8px">${u()==="vi"?"💝 Ủng hộ VibeTTS":"💝 Support VibeTTS"}</h3>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px">
          ${u()==="vi"?"Mọi khoản đóng góp giúp chúng tôi duy trì và phát triển dịch vụ":"Every donation helps us maintain and develop the service"}
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
  `}function T(e=[]){return`
    <div class="history-page fade-in">
      <div class="clone-hero">
        <h1>${l("historyTitle")} 🎤</h1>
      </div>
      ${e.length===0?`
        <div class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
            <path d="M19 10v2a7 7 0 01-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
          <h3>${l("historyEmpty")}</h3>
          <p>${l("historyEmptyDesc")}</p>
        </div>
      `:`
        <div class="history-list">
          ${e.map(t=>`
            <div class="history-item">
              <span class="history-voice-badge">${t.voiceName||t.voice}</span>
              <span class="history-text">${t.text}</span>
              <span class="history-date">${new Date(t.date).toLocaleDateString()}</span>
            </div>
          `).join("")}
        </div>
      `}
    </div>
  `}const b=[{id:"trending-1",name:"Nguyễn Ngọc Ngạn",gender:"Male",locale:"vi-VN",edgeVoice:"vi-VN-NamMinhNeural",category:"trending"},{id:"trending-2",name:"Gia Cát Lượng",gender:"Male",locale:"vi-VN",edgeVoice:"vi-VN-NamMinhNeural",category:"trending"},{id:"trending-3",name:"Tào Tháo",gender:"Male",locale:"vi-VN",edgeVoice:"vi-VN-NamMinhNeural",category:"trending"},{id:"trending-4",name:"Fan Conan",gender:"Male",locale:"vi-VN",edgeVoice:"vi-VN-NamMinhNeural",category:"trending"},{id:"trending-5",name:"Adam",gender:"Male",locale:"vi-VN",edgeVoice:"vi-VN-NamMinhNeural",category:"trending"},{id:"trending-6",name:"Bé Ngân kể chuyện",gender:"Female",locale:"vi-VN",edgeVoice:"vi-VN-HoaiMyNeural",category:"trending"},{id:"trending-7",name:"MC Trấn Thành",gender:"Male",locale:"vi-VN",edgeVoice:"vi-VN-NamMinhNeural",category:"trending"},{id:"trending-8",name:"Sơn Tùng M-TP",gender:"Male",locale:"vi-VN",edgeVoice:"vi-VN-NamMinhNeural",category:"trending"}],$=[{id:"google-vi",shortName:"google-vi",name:"Chị Google (Chuẩn)",gender:"Female",locale:"vi-VN",engine:"google",isAlias:!0},{id:"vi-VN-HoaiMyNeural",shortName:"vi-VN-HoaiMyNeural",name:"Nguyễn Thị Nhung",gender:"Female",locale:"vi-VN"},{id:"vi-VN-NamMinhNeural",shortName:"vi-VN-NamMinhNeural",name:"Trần Thế Sơn",gender:"Male",locale:"vi-VN"},{id:"vi-custom-1",shortName:"vi-VN-HoaiMyNeural",name:"Nguyễn Minh Quang (Nhanh)",gender:"Female",locale:"vi-VN",isAlias:!0,rateOffset:15,pitchOffset:5},{id:"vi-custom-2",shortName:"vi-VN-NamMinhNeural",name:"Đặng Tùng Duy (Trầm)",gender:"Male",locale:"vi-VN",isAlias:!0,pitchOffset:-10},{id:"vi-custom-3",shortName:"vi-VN-HoaiMyNeural",name:"Nguyễn Thị Châu (Chậm rãi)",gender:"Female",locale:"vi-VN",isAlias:!0,rateOffset:-15,pitchOffset:-5},{id:"vi-custom-4",shortName:"vi-VN-NamMinhNeural",name:"Nguyễn Tiến Dũng (Cao)",gender:"Male",locale:"vi-VN",isAlias:!0,rateOffset:10,pitchOffset:12},{id:"vi-custom-13",shortName:"vi-VN-HoaiMyNeural",name:"Nguyễn Thị Khánh Ly",gender:"Female",locale:"vi-VN",isAlias:!0,rateOffset:-15,pitchOffset:8},{id:"vi-custom-21",shortName:"vi-VN-NamMinhNeural",name:"Nguyễn Thành Trung",gender:"Male",locale:"vi-VN",isAlias:!0,rateOffset:-18,pitchOffset:15},{id:"vi-custom-22",shortName:"vi-VN-NamMinhNeural",name:"Trần Thế Hào",gender:"Male",locale:"vi-VN",isAlias:!0,rateOffset:25,pitchOffset:-15}];function I(e=null){return e==="VN"?$.filter(t=>["vi-custom-21","vi-custom-22","vi-custom-13","google-vi"].includes(t.id)):e?[]:b}const a={user:null,token:localStorage.getItem("vibettsToken")||null,voices:[],filteredVoices:[],selectedCountry:null,selectedVoice:null,favorites:JSON.parse(localStorage.getItem("vibettsFavorites")||"[]"),paragraphs:[{id:1,text:""}],currentPage:"home",audio:null,currentAudioUrl:null,theme:localStorage.getItem("vibettsTheme")||"light",isGenerating:!1,activeTab:"default"};document.addEventListener("DOMContentLoaded",async()=>{R(a.theme),q(),Y(),a.token&&await Q(),N(),window.addEventListener("hashchange",N),ee()});function N(){const t=(window.location.hash||"#/").replace("#/","")||"home",o={"":"home",home:"home","voice-clone":"clone","mp3-to-text":"stt",leaderboard:"leaderboard",history:"history"}[t]||"home";W(o)}function W(e){a.currentPage=e;const t=document.getElementById("pageContent");switch(document.querySelectorAll(".nav-item").forEach(n=>{n.classList.toggle("active",n.dataset.page===e)}),e){case"home":t.innerHTML=w(),V();break;case"clone":t.innerHTML=Z(),de();break;case"stt":t.innerHTML=J(),ue();break;case"leaderboard":t.innerHTML=K();break;case"history":ge();break;default:t.innerHTML=w(),V()}H(),window.scrollTo({top:0,behavior:"smooth"})}function Y(){document.getElementById("themeToggle").addEventListener("click",()=>{a.theme=a.theme==="light"?"dark":"light",R(a.theme),localStorage.setItem("vibettsTheme",a.theme)}),document.getElementById("langToggle").addEventListener("click",()=>{const e=z();document.getElementById("langLabel").textContent=e.toUpperCase(),N()}),document.getElementById("loginBtn").addEventListener("click",()=>{document.getElementById("loginModal").classList.add("active")}),document.getElementById("modalClose").addEventListener("click",C),document.getElementById("loginModal").addEventListener("click",e=>{e.target===document.getElementById("loginModal")&&C()}),document.querySelectorAll(".modal-tab").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".modal-tab").forEach(n=>n.classList.remove("active")),e.classList.add("active");const t=e.dataset.tab==="register";document.querySelector("#submitAuth span").textContent=l(t?"btnRegister":"btnLogin")})}),document.getElementById("loginForm").addEventListener("submit",X),document.getElementById("togglePassword").addEventListener("click",()=>{const e=document.getElementById("inputPassword");e.type=e.type==="password"?"text":"password"}),document.getElementById("logoutBtn").addEventListener("click",_),document.getElementById("mobileMenuBtn").addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("open"),document.getElementById("sidebarOverlay").classList.toggle("active")}),document.getElementById("sidebarOverlay").addEventListener("click",H),ce(),document.addEventListener("click",e=>{const t=e.target.closest("[data-navigate]");t&&(window.location.hash=t.dataset.navigate)})}function H(){document.getElementById("sidebar").classList.remove("open"),document.getElementById("sidebarOverlay").classList.remove("active")}function R(e){document.documentElement.setAttribute("data-theme",e);const t=document.querySelector(".theme-icon-light"),n=document.querySelector(".theme-icon-dark");e==="dark"?(t&&(t.style.display="none"),n&&(n.style.display="block")):(t&&(t.style.display="block"),n&&(n.style.display="none"))}async function Q(){try{const t=await(await fetch("/api/auth/me",{headers:{Authorization:`Bearer ${a.token}`}})).json();t.success?(a.user=t.user,a.favorites=t.user.favorites||[],B()):(a.token=null,localStorage.removeItem("vibettsToken"))}catch(e){console.error("Auth check failed:",e)}}async function X(e){e.preventDefault();const t=document.getElementById("inputUsername").value.trim(),n=document.getElementById("inputPassword").value,o=document.querySelector(".modal-tab.active").dataset.tab==="register",i=document.getElementById("formError");try{const s=await(await fetch(o?"/api/auth/register":"/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})})).json();s.success?(a.token=s.token,a.user=s.user,a.favorites=s.user.favorites||[],localStorage.setItem("vibettsToken",s.token),B(),C(),g(l("loginSuccess"),"success")):i.textContent=s.message}catch{i.textContent="Connection error"}}function _(){a.user=null,a.token=null,a.favorites=[],localStorage.removeItem("vibettsToken"),B(),g(l("logoutSuccess"),"info")}function B(){const e=document.getElementById("loginBtn"),t=document.getElementById("userMenu"),n=document.getElementById("userName");a.user?(e.style.display="none",t.style.display="flex",n.textContent=a.user.username):(e.style.display="flex",t.style.display="none")}function C(){document.getElementById("loginModal").classList.remove("active"),document.getElementById("formError").textContent="",document.getElementById("inputUsername").value="",document.getElementById("inputPassword").value=""}async function ee(){try{const n=(await(await fetch("/api/voices")).json()).filter(o=>!(o.locale||o.shortName).startsWith("vi-VN"));if(a.voices=[...$,...n],a.currentPage==="home"){G();const o=k.find(i=>i.code==="VN");o&&y(o)}}catch(e){console.error("Failed to fetch voices:",e),g("Failed to load voices. Please check server.","error")}}function V(){var c,s;const e=document.getElementById("countryCarousel");e&&((c=document.getElementById("carouselLeft"))==null||c.addEventListener("click",()=>{e.scrollBy({left:-200,behavior:"smooth"})}),(s=document.getElementById("carouselRight"))==null||s.addEventListener("click",()=>{e.scrollBy({left:200,behavior:"smooth"})}));const t=document.getElementById("countrySearch");t&&t.addEventListener("input",d=>{const h=d.target.value.toLowerCase();document.querySelectorAll(".country-item").forEach(v=>{const m=v.dataset.name.toLowerCase();v.style.display=m.includes(h)?"":"none"})});const n=document.getElementById("voiceSearch");n&&n.addEventListener("input",d=>{ae(d.target.value)}),document.querySelectorAll(".voice-tab").forEach(d=>{d.addEventListener("click",()=>{document.querySelectorAll(".voice-tab").forEach(h=>h.classList.remove("active")),d.classList.add("active"),a.activeTab=d.dataset.tab,te(d.dataset.tab)})});const o=document.getElementById("advancedToggle");o&&o.addEventListener("click",()=>{o.classList.toggle("open"),document.getElementById("advancedBody").classList.toggle("open")}),x("rateSlider","rateValue","%"),x("pitchSlider","pitchValue","Hz"),x("volumeSlider","volumeValue","%");const i=document.getElementById("addParagraphBtn");i&&i.addEventListener("click",le),O();const r=document.getElementById("generateBtn");if(r&&r.addEventListener("click",re),a.voices.length>0)if(G(),a.selectedCountry)y(a.selectedCountry);else{const d=k.find(h=>h.code==="VN");d&&y(d)}}function te(e){const n=document.querySelectorAll(".tts-section .section-step")[0];switch(e){case"default":n&&(n.style.display="block"),a.selectedCountry&&y(a.selectedCountry);break;case"trending":n&&(n.style.display="block");const o=a.selectedCountry?I(a.selectedCountry.code):I(null);o.length>0?f(o):f(b);break;case"favorites":n&&(n.style.display="none");const i=a.voices.filter(s=>a.favorites.includes(s.id)),r=b.filter(s=>a.favorites.includes(s.id)),c=[...i,...r];if(c.length===0){const s=document.getElementById("voiceGrid");s&&(s.innerHTML=`
            <div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-tertiary)">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 12px;display:block;opacity:0.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
              <p style="font-size:14px;font-weight:600">${u()==="vi"?"Chưa có giọng yêu thích":"No favorite voices yet"}</p>
              <p style="font-size:13px;margin-top:4px">${u()==="vi"?"Bấm ♡ để thêm giọng vào danh sách yêu thích":"Click ♡ to add voices to favorites"}</p>
            </div>
          `)}else f(c);break}}function x(e,t,n){const o=document.getElementById(e),i=document.getElementById(t);o&&i&&o.addEventListener("input",()=>{const r=parseInt(o.value);i.textContent=`${r>=0?"+":""}${r}${n}`})}function G(){const e=document.getElementById("countryCarousel");if(!e)return;const t=j(a.voices);e.innerHTML=t.map(n=>{var o;return`
    <div class="country-item ${((o=a.selectedCountry)==null?void 0:o.code)===n.code?"active":""}" 
         data-code="${n.code}" data-name="${n.name} ${n.nameEn}" data-locale="${n.locale}">
      <div class="country-flag"><img src="https://flagcdn.com/w80/${n.code.toLowerCase()}.png" alt="${n.nameEn}" onerror="this.parentElement.textContent='${n.flag}'"></div>
      <div class="country-name">${u()==="vi"?n.name:n.nameEn}</div>
    </div>
  `}).join(""),e.querySelectorAll(".country-item").forEach(n=>{n.addEventListener("click",()=>{const o=t.find(i=>i.code===n.dataset.code);o&&y(o)})})}function y(e){a.selectedCountry=e,document.querySelectorAll(".country-item").forEach(o=>{o.classList.toggle("active",o.dataset.code===e.code)});const t=e.locale.split("-")[0],n=e.locale.split("-")[1];a.filteredVoices=a.voices.filter(o=>{const i=o.locale||o.shortName,r=i.split("-");return i===e.locale||r[0]===t&&r[1]===n||r[0]===t&&!n}),f(a.filteredVoices)}function f(e){const t=document.getElementById("voiceGrid");if(t){if(e.length===0){t.innerHTML=`
      <div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--text-tertiary)">
        ${u()==="vi"?"Không tìm thấy giọng đọc":"No voices found"}
      </div>
    `;return}t.innerHTML=e.map(n=>{var s;const o=n.gender==="Male",i=a.favorites.includes(n.id),r=((s=a.selectedVoice)==null?void 0:s.id)===n.id,c=L(n);return`
      <div class="voice-card ${r?"active":""}" data-voice-id="${n.id}">
        <div class="voice-avatar ${o?"male":"female"}">
          ${o?"♂":"♀"}
        </div>
        <div class="voice-name" title="${n.name}">${c}</div>
        <div class="voice-actions">
          <button class="voice-btn preview" data-voice="${n.id}" title="Preview">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
          <button class="voice-btn fav ${i?"active":""}" data-voice="${n.id}" title="Favorite">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </button>
        </div>
      </div>
    `}).join(""),t.querySelectorAll(".voice-card").forEach(n=>{n.addEventListener("click",o=>{if(o.target.closest(".voice-btn"))return;const i=n.dataset.voiceId,r=a.voices.find(c=>c.id===i);ne(r)})}),t.querySelectorAll(".voice-btn.preview").forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation();const i=n.dataset.voice;oe(i)})}),t.querySelectorAll(".voice-btn.fav").forEach(n=>{n.addEventListener("click",o=>{o.stopPropagation();const i=n.dataset.voice;ie(i),n.classList.toggle("active")})})}}function L(e){var c,s;if(e.name&&(e.isAlias||e.category==="trending"||(c=e.id)!=null&&c.startsWith("vi-custom")||(s=e.id)!=null&&s.startsWith("trending")))return e.name;const t=e.shortName||e.id||"",n=t.split("-");if(n.length>=3){const h=n.slice(2).join("-").replace("Neural","").replace("Multilingual","").replace(/([a-z])([A-Z])/g,"$1 $2");if(h.trim())return h.trim()}const o=e.name||"",i=o.match(/Microsoft\s+(.+?)\s+Online/i);if(i)return i[1].replace(/([a-z])([A-Z])/g,"$1 $2").trim();const r=o.match(/^(.+?)\s*[\-\(]/);return r?r[1].trim():o||t}function ne(e){a.selectedVoice=e,document.querySelectorAll(".voice-card").forEach(t=>{t.classList.toggle("active",t.dataset.voiceId===e.id)})}function ae(e){const t=e.toLowerCase(),n=a.filteredVoices.filter(o=>(o.name||o.shortName).toLowerCase().includes(t));f(n)}async function oe(e){const t=[...a.voices,...b].find(c=>c.id===e),n=(t==null?void 0:t.edgeVoice)||(t==null?void 0:t.shortName)||e,o=(t==null?void 0:t.rateOffset)||0,i=(t==null?void 0:t.pitchOffset)||0,r=u()==="vi"?"Xin chào, đây là giọng đọc mẫu từ VibeTTS.":"Hello, this is a sample voice from VibeTTS.";try{g(u()==="vi"?"Đang tải preview...":"Loading preview...","info");const c=await fetch("/api/tts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r,voice:n,engine:(t==null?void 0:t.engine)||"edge",rate:o,pitch:i})});if(!c.ok)throw new Error("TTS failed");const s=await c.blob(),d=URL.createObjectURL(s);a.audio&&a.audio.pause(),a.audio=new Audio(d),a.audio.play()}catch(c){console.error("Preview failed:",c),g("Preview failed","error")}}function ie(e){const t=a.favorites.indexOf(e);t>-1?a.favorites.splice(t,1):a.favorites.push(e),localStorage.setItem("vibettsFavorites",JSON.stringify(a.favorites)),a.token&&fetch("/api/favorites/toggle",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a.token}`},body:JSON.stringify({voiceId:e})}).catch(console.error)}function le(){const e=document.getElementById("paragraphsContainer"),t=a.paragraphs.length+1;a.paragraphs.push({id:t,text:""});const n=document.createElement("div");n.className="paragraph-block",n.dataset.id=t,n.innerHTML=`
    <div class="paragraph-header">
      <span class="paragraph-label">${l("paragraphLabel")} ${t}</span>
      <button class="paragraph-remove" data-id="${t}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <textarea class="paragraph-textarea" placeholder="${l("textPlaceholder")}" data-paragraph="${t}"></textarea>
    <div class="paragraph-footer">
      <span class="char-count" data-count="${t}">0</span>
    </div>
  `,e.appendChild(n),n.querySelector(".paragraph-remove").addEventListener("click",()=>{n.remove(),a.paragraphs=a.paragraphs.filter(o=>o.id!==t)}),O()}function O(){document.querySelectorAll(".paragraph-textarea").forEach(e=>{e.removeEventListener("input",M),e.addEventListener("input",M)})}function M(e){const t=parseInt(e.target.dataset.paragraph),n=a.paragraphs.find(i=>i.id===t);n&&(n.text=e.target.value);const o=document.querySelector(`.char-count[data-count="${t}"]`);o&&(o.textContent=e.target.value.length)}async function re(){var n,o,i;if(a.isGenerating)return;if(!a.selectedVoice){g(l("noVoice"),"error");return}const e=[];if(document.querySelectorAll(".paragraph-textarea").forEach(r=>{r.value.trim()&&e.push(r.value.trim())}),e.length===0){g(l("noText"),"error");return}const t=document.getElementById("generateBtn");a.isGenerating=!0,t.classList.add("loading");try{const r=parseInt(((n=document.getElementById("rateSlider"))==null?void 0:n.value)||0),c=parseInt(((o=document.getElementById("pitchSlider"))==null?void 0:o.value)||0),s=parseInt(((i=document.getElementById("volumeSlider"))==null?void 0:i.value)||0),d=a.selectedVoice.edgeVoice||a.selectedVoice.shortName||a.selectedVoice.id,h=a.selectedVoice.rateOffset||0,v=a.selectedVoice.pitchOffset||0;let m;if(e.length===1)m=await fetch("/api/tts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e[0],voice:d,engine:a.selectedVoice.engine||"edge",rate:r+h,pitch:c+v,volume:s})});else{const E=e.map(F=>({text:F,voice:d,engine:a.selectedVoice.engine||"edge",rate:r+h,pitch:c+v,volume:s}));m=await fetch("/api/tts/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({paragraphs:E})})}if(!m.ok){const E=await m.json();throw new Error(E.error||"TTS failed")}const D=await m.blob();a.currentAudioUrl&&URL.revokeObjectURL(a.currentAudioUrl),a.currentAudioUrl=URL.createObjectURL(D),se(a.currentAudioUrl,L(a.selectedVoice),e[0]),g(l("ttsSuccess"),"success"),a.token&&fetch("/api/history/add",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a.token}`},body:JSON.stringify({text:e.join(`
`),voice:a.selectedVoice.id,voiceName:L(a.selectedVoice)})}).catch(console.error)}catch(r){console.error("TTS Error:",r),g(l("ttsError")+" "+r.message,"error")}finally{a.isGenerating=!1,t.classList.remove("loading")}}function se(e,t,n){const o=document.getElementById("audioPlayerBar");o.style.display="flex",document.getElementById("playerVoiceName").textContent=t,document.getElementById("playerTextPreview").textContent=n.substring(0,60)+"...",a.audio&&a.audio.pause(),a.audio=new Audio(e);const i=document.getElementById("playerPlayPause"),r=i.querySelector(".play-icon"),c=i.querySelector(".pause-icon"),s=document.getElementById("playerProgressFill"),d=document.getElementById("playerCurrentTime"),h=document.getElementById("playerDuration"),v=document.getElementById("playerVolume");r.style.display="block",c.style.display="none",s.style.width="0%",d.textContent="0:00",h.textContent="0:00",a.audio.addEventListener("loadedmetadata",()=>{h.textContent=P(a.audio.duration)}),a.audio.addEventListener("timeupdate",()=>{if(a.audio.duration){const m=a.audio.currentTime/a.audio.duration*100;s.style.width=m+"%",d.textContent=P(a.audio.currentTime)}}),a.audio.addEventListener("ended",()=>{r.style.display="block",c.style.display="none"}),a.audio.volume=parseFloat(v.value),a.audio.play().then(()=>{r.style.display="none",c.style.display="block"}).catch(console.error)}function ce(){document.getElementById("playerPlayPause").addEventListener("click",()=>{if(!a.audio)return;const e=document.querySelector("#playerPlayPause .play-icon"),t=document.querySelector("#playerPlayPause .pause-icon");a.audio.paused?(a.audio.play(),e.style.display="none",t.style.display="block"):(a.audio.pause(),e.style.display="block",t.style.display="none")}),document.getElementById("playerProgress").addEventListener("click",e=>{if(!a.audio||!a.audio.duration)return;const t=e.currentTarget.getBoundingClientRect(),n=(e.clientX-t.left)/t.width;a.audio.currentTime=n*a.audio.duration}),document.getElementById("playerVolume").addEventListener("input",e=>{a.audio&&(a.audio.volume=parseFloat(e.target.value))}),document.getElementById("playerDownload").addEventListener("click",()=>{if(!a.currentAudioUrl)return;const e=document.createElement("a");e.href=a.currentAudioUrl,e.download=`vibetts_${Date.now()}.mp3`,e.click(),g(l("downloadSuccess"),"success")})}function P(e){if(!e||isNaN(e))return"0:00";const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`}function de(){const e=document.getElementById("cloneBtn");e&&e.addEventListener("click",()=>{var o,i;const t=(o=document.getElementById("cloneName"))==null?void 0:o.value.trim(),n=(i=document.getElementById("cloneLink"))==null?void 0:i.value.trim();if(!t||!n){g(u()==="vi"?"Vui lòng điền đầy đủ thông tin":"Please fill in all fields","error");return}if(!n.includes("drive.google.com")){g(u()==="vi"?"Vui lòng nhập link Google Drive hợp lệ":"Please enter a valid Google Drive link","error");return}g(u()==="vi"?"Đã gửi yêu cầu nhân bản giọng nói!":"Voice clone request sent!","success")})}function ue(){const e=document.getElementById("sttBtn");e&&e.addEventListener("click",()=>{var n;if(!((n=document.getElementById("sttLink"))==null?void 0:n.value.trim())){g(u()==="vi"?"Vui lòng nhập link Google Drive":"Please enter a Google Drive link","error");return}g(u()==="vi"?"Đã gửi yêu cầu chuyển đổi!":"Conversion request sent!","success")})}async function ge(){const e=document.getElementById("pageContent");if(!a.token){e.innerHTML=T([]);return}try{const n=await(await fetch("/api/history",{headers:{Authorization:`Bearer ${a.token}`}})).json();e.innerHTML=T(n.history||[])}catch{e.innerHTML=T([])}}function g(e,t="info"){const n=document.getElementById("toastContainer"),o=document.createElement("div");o.className=`toast ${t}`,o.textContent=e,n.appendChild(o),setTimeout(()=>{o.remove()},3e3)}
