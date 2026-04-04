// Internationalization module
const translations = {
  vi: {
    menuLabel: 'MENU CÔNG CỤ',
    navHome: 'Trang chủ',
    navClone: 'Nhân bản giọng nói',
    navStt: 'MP3 sang văn bản',
    navLeaderboard: 'Cúng dường',
    navHistory: 'Giọng clone của bạn',
    loginBtn: 'ĐĂNG NHẬP NGAY',
    loginTitle: 'Đăng nhập VibeTTS',
    loginSubtitle: 'Đăng nhập để sử dụng đầy đủ tính năng',
    tabLogin: 'Đăng nhập',
    tabRegister: 'Đăng ký',
    labelUsername: 'Tên đăng nhập',
    labelPassword: 'Mật khẩu',
    btnLogin: 'Đăng nhập',
    btnRegister: 'Đăng ký',
    heroTitle: 'Ép Máy Rặn Chữ Thành Tiếng',
    heroSubtitle: 'Web mở xài chùa không giới hạn ký tự. Hỗ trợ 400+ giọng đọc AI tự nhiên đa ngôn ngữ.',
    announcementTitle: 'Thông Báo Khẩn!',
    announcementText: 'Tham gia cộng đồng và kênh thông báo chính thức của VibeTTS trên Telegram! Cập nhật tính năng mới, mẹo sử dụng và quyền lợi VIP.',
    btnTelegramGroup: 'Tham gia Nhóm Chat',
    btnTelegramChannel: 'Vào Kênh Thông Báo',
    featureClone: 'Nhân bản giọng nói',
    featureStt: 'MP3 sang văn bản',
    featureTts: 'Văn bản sang MP3',
    featureVideo: 'Nhép Môi (Video)',
    step1Title: 'Chọn Quốc Gia',
    step2Title: 'Chọn Tone Giọng',
    step3Title: 'Lời dặn dò của sếp:',
    searchCountry: 'Tìm quốc gia...',
    searchVoice: 'Tìm tên giọng đọc...',
    emotionToggle: 'Cảm xúc như người thật',
    addParagraph: '+ Thêm đoạn',
    paragraphLabel: 'ĐOẠN',
    textPlaceholder: 'Sếp nhập văn bản vào đây nhé...',
    generateBtn: 'BẮT ĐẦU RẶN CHỮ',
    generating: 'Đang xử lý...',
    advancedControls: 'Điều chỉnh nâng cao',
    speed: 'Tốc độ',
    pitch: 'Cao độ',
    volume: 'Âm lượng',
    cloneTitle: 'Nhân Bản Giọng Nói AI',
    cloneSubtitle: 'Tạo giọng AI giống hệt giọng bạn hoặc bất kỳ ai',
    cloneNameLabel: 'Tên giọng clone',
    cloneNamePlaceholder: 'VD: David Beckham',
    cloneLinkLabel: 'Link Google Drive (file .mp3, .wav, .mp4)',
    cloneLinkPlaceholder: 'https://drive.google.com/file/d/...',
    cloneInfo: 'File phải được chia sẻ công khai (Anyone with the link). Hỗ trợ file lên đến 1GB.',
    cloneBtn: 'Bắt đầu nhân bản',
    sttTitle: 'Chuyển MP3 Sang Văn Bản',
    sttSubtitle: 'Chuyển đổi file âm thanh thành văn bản hoặc phụ đề SRT',
    sttLinkLabel: 'Link Google Drive (file .mp3, .wav, .mp4)',
    sttLinkPlaceholder: 'https://drive.google.com/file/d/...',
    sttFormatLabel: 'Định dạng đầu ra',
    sttFormatText: 'Văn bản thuần',
    sttFormatSrt: 'Phụ đề SRT',
    sttBtn: 'Bắt đầu chuyển đổi',
    leaderboardTitle: '🏆 Bảng Cúng Dường',
    leaderboardRank: 'Hạng',
    leaderboardName: 'Tên',
    leaderboardAmount: 'Số tiền',
    historyTitle: 'Giọng Clone Của Bạn',
    historyEmpty: 'Bạn chưa có giọng clone nào',
    historyEmptyDesc: 'Hãy thử tạo giọng clone mới từ mục "Nhân bản giọng nói"',
    footer: 'Bản quyền © 2026 thuộc về',
    downloadSuccess: 'Tải xuống thành công!',
    ttsSuccess: 'Chuyển đổi thành công!',
    ttsError: 'Lỗi chuyển đổi. Vui lòng thử lại.',
    loginSuccess: 'Đăng nhập thành công!',
    logoutSuccess: 'Đăng xuất thành công!',
    noText: 'Vui lòng nhập văn bản',
    noVoice: 'Vui lòng chọn giọng đọc',
  },
  en: {
    menuLabel: 'TOOL MENU',
    navHome: 'Home',
    navClone: 'Voice Clone',
    navStt: 'MP3 to Text',
    navLeaderboard: 'Donations',
    navHistory: 'Your Cloned Voices',
    loginBtn: 'LOGIN NOW',
    loginTitle: 'Login to VibeTTS',
    loginSubtitle: 'Login to access all features',
    tabLogin: 'Login',
    tabRegister: 'Register',
    labelUsername: 'Username',
    labelPassword: 'Password',
    btnLogin: 'Login',
    btnRegister: 'Register',
    heroTitle: 'AI Text to Speech Engine',
    heroSubtitle: 'Unlimited free usage. Support 400+ natural AI voices in multiple languages.',
    announcementTitle: 'Announcement!',
    announcementText: 'Join our community and announcement channel on Telegram! Get the latest features, tips, and VIP benefits.',
    btnTelegramGroup: 'Join Chat Group',
    btnTelegramChannel: 'Join Channel',
    featureClone: 'Voice Cloning',
    featureStt: 'MP3 to Text',
    featureTts: 'Text to MP3',
    featureVideo: 'Lip Sync (Video)',
    step1Title: 'Select Country',
    step2Title: 'Select Voice',
    step3Title: 'Enter your text:',
    searchCountry: 'Search country...',
    searchVoice: 'Search voice name...',
    emotionToggle: 'Realistic emotion',
    addParagraph: '+ Add paragraph',
    paragraphLabel: 'PARAGRAPH',
    textPlaceholder: 'Enter your text here...',
    generateBtn: 'START GENERATING',
    generating: 'Processing...',
    advancedControls: 'Advanced Controls',
    speed: 'Speed',
    pitch: 'Pitch',
    volume: 'Volume',
    cloneTitle: 'AI Voice Cloning',
    cloneSubtitle: 'Create an AI voice that sounds just like you or anyone',
    cloneNameLabel: 'Clone voice name',
    cloneNamePlaceholder: 'e.g. David Beckham',
    cloneLinkLabel: 'Google Drive link (.mp3, .wav, .mp4)',
    cloneLinkPlaceholder: 'https://drive.google.com/file/d/...',
    cloneInfo: 'File must be shared publicly (Anyone with the link). Supports files up to 1GB.',
    cloneBtn: 'Start Cloning',
    sttTitle: 'Convert MP3 to Text',
    sttSubtitle: 'Convert audio files to text or SRT subtitles',
    sttLinkLabel: 'Google Drive link (.mp3, .wav, .mp4)',
    sttLinkPlaceholder: 'https://drive.google.com/file/d/...',
    sttFormatLabel: 'Output format',
    sttFormatText: 'Plain text',
    sttFormatSrt: 'SRT Subtitle',
    sttBtn: 'Start Converting',
    leaderboardTitle: '🏆 Donation Leaderboard',
    leaderboardRank: 'Rank',
    leaderboardName: 'Name',
    leaderboardAmount: 'Amount',
    historyTitle: 'Your Cloned Voices',
    historyEmpty: 'No cloned voices yet',
    historyEmptyDesc: 'Try creating a new cloned voice from "Voice Clone"',
    footer: 'Copyright © 2026 by',
    downloadSuccess: 'Download successful!',
    ttsSuccess: 'Conversion successful!',
    ttsError: 'Conversion error. Please try again.',
    loginSuccess: 'Login successful!',
    logoutSuccess: 'Logout successful!',
    noText: 'Please enter text',
    noVoice: 'Please select a voice',
  }
};

let currentLang = localStorage.getItem('vibettsLang') || 'vi';

export function t(key) {
  return translations[currentLang]?.[key] || translations['vi'][key] || key;
}

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('vibettsLang', lang);
  updateAllTexts();
}

export function toggleLang() {
  setLang(currentLang === 'vi' ? 'en' : 'vi');
  return currentLang;
}

function updateAllTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
}

export function initI18n() {
  updateAllTexts();
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = currentLang.toUpperCase();
}
