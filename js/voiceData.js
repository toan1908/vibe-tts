// Vietnamese voice name mapping - maps Edge TTS short names to friendly Vietnamese names
// The original ohfree.me site uses custom display names for voices
export const vietnameseVoiceNames = {
  // Edge TTS Vietnamese voices with friendly names
  'vi-VN-HoaiMyNeural': 'Nguyễn Thị Nhung',
  'vi-VN-NamMinhNeural': 'Trần Thế Sơn',
  // Additional Vietnamese voice name mappings
};

// Trending/Custom voices - these are curated popular voices including cloned voices
// that appear under the "Thịnh hành" tab
export const trendingVoices = [
  { id: 'trending-1', name: 'Nguyễn Ngọc Ngạn', gender: 'Male', locale: 'vi-VN', edgeVoice: 'vi-VN-NamMinhNeural', category: 'trending' },
  { id: 'trending-2', name: 'Gia Cát Lượng', gender: 'Male', locale: 'vi-VN', edgeVoice: 'vi-VN-NamMinhNeural', category: 'trending' },
  { id: 'trending-3', name: 'Tào Tháo', gender: 'Male', locale: 'vi-VN', edgeVoice: 'vi-VN-NamMinhNeural', category: 'trending' },
  { id: 'trending-4', name: 'Fan Conan', gender: 'Male', locale: 'vi-VN', edgeVoice: 'vi-VN-NamMinhNeural', category: 'trending' },
  { id: 'trending-5', name: 'Adam', gender: 'Male', locale: 'vi-VN', edgeVoice: 'vi-VN-NamMinhNeural', category: 'trending' },
  { id: 'trending-6', name: 'Bé Ngân kể chuyện', gender: 'Female', locale: 'vi-VN', edgeVoice: 'vi-VN-HoaiMyNeural', category: 'trending' },
  { id: 'trending-7', name: 'MC Trấn Thành', gender: 'Male', locale: 'vi-VN', edgeVoice: 'vi-VN-NamMinhNeural', category: 'trending' },
  { id: 'trending-8', name: 'Sơn Tùng M-TP', gender: 'Male', locale: 'vi-VN', edgeVoice: 'vi-VN-NamMinhNeural', category: 'trending' },
];

// Extended Vietnamese voices with custom Vietnamese-style friendly names
// The original site maps Microsoft voices to Vietnamese-sounding names
export const extendedVietnameseVoices = [
  // New Native Integration: Google Translate TTS
  { id: 'google-vi', shortName: 'google-vi', name: 'Chị Google (Chuẩn)', gender: 'Female', locale: 'vi-VN', engine: 'google', isAlias: true },

  // Original Edge TTS Voices
  { id: 'vi-VN-HoaiMyNeural', shortName: 'vi-VN-HoaiMyNeural', name: 'Nguyễn Thị Nhung', gender: 'Female', locale: 'vi-VN' },
  { id: 'vi-VN-NamMinhNeural', shortName: 'vi-VN-NamMinhNeural', name: 'Trần Thế Sơn', gender: 'Male', locale: 'vi-VN' },
  
  // Curated virtual Vietnamese voices (using Edge TTS voices with distinct Pitch/Rate offsets)
  // We keep only the distinct ones to avoid redundancy
  { id: 'vi-custom-1', shortName: 'vi-VN-HoaiMyNeural', name: 'Nguyễn Minh Quang (Nhanh)', gender: 'Female', locale: 'vi-VN', isAlias: true, rateOffset: 15, pitchOffset: 5 },
  { id: 'vi-custom-2', shortName: 'vi-VN-NamMinhNeural', name: 'Đặng Tùng Duy (Trầm)', gender: 'Male', locale: 'vi-VN', isAlias: true, pitchOffset: -10 },
  { id: 'vi-custom-3', shortName: 'vi-VN-HoaiMyNeural', name: 'Nguyễn Thị Châu (Chậm rãi)', gender: 'Female', locale: 'vi-VN', isAlias: true, rateOffset: -15, pitchOffset: -5 },
  { id: 'vi-custom-4', shortName: 'vi-VN-NamMinhNeural', name: 'Nguyễn Tiến Dũng (Cao)', gender: 'Male', locale: 'vi-VN', isAlias: true, rateOffset: 10, pitchOffset: 12 },
  { id: 'vi-custom-13', shortName: 'vi-VN-HoaiMyNeural', name: 'Nguyễn Thị Khánh Ly', gender: 'Female', locale: 'vi-VN', isAlias: true, rateOffset: -15, pitchOffset: 8 },
  { id: 'vi-custom-21', shortName: 'vi-VN-NamMinhNeural', name: 'Nguyễn Thành Trung', gender: 'Male', locale: 'vi-VN', isAlias: true, rateOffset: -18, pitchOffset: 15 },
  { id: 'vi-custom-22', shortName: 'vi-VN-NamMinhNeural', name: 'Trần Thế Hào', gender: 'Male', locale: 'vi-VN', isAlias: true, rateOffset: 25, pitchOffset: -15 },
];

// Get Vietnamese trending voices for the "Thịnh hành" tab
export function getTrendingVoices(countryCode = null) {
  if (countryCode === 'VN') {
    // Return a subset of trending voices for Vietnam
    return extendedVietnameseVoices.filter(v => 
      ['vi-custom-21', 'vi-custom-22', 'vi-custom-13', 'google-vi'].includes(v.id)
    );
  }
  if (!countryCode) {
    // Return global trending (cloned voices)
    return trendingVoices;
  }
  return [];
}
