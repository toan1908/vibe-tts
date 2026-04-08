# Hướng dẫn Deploy VibeTTS lên Vercel

## Cách 1: Deploy bằng Vercel CLI (Khuyến nghị)

### Bước 1: Cài đặt Vercel CLI
```bash
npm install -g vercel
```

### Bước 2: Đăng nhập vào Vercel
```bash
vercel login
```

### Bước 3: Deploy
```bash
vercel
```

Sau đó làm theo hướng dẫn:
- Chọn "Set up and deploy" (Y)
- Chọn scope (thường là cá nhân của bạn)
- Link to existing project? (N - nếu lần đầu)
- Project name? (nhấn Enter để dùng mặc định)
- In which directory is your code located? (nhấn Enter để dùng mặc định)
- Want to override the settings? (N)

### Bước 4: Deploy production
```bash
vercel --prod
```

## Cách 2: Deploy qua GitHub

### Bước 1: Push code lên GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/vibetts.git
git push -u origin main
```

### Bước 2: Kết nối với Vercel
1. Truy cập https://vercel.com
2. Đăng nhập bằng GitHub
3. Click "Add New Project"
4. Chọn repository VibeTTS từ GitHub
5. Click "Deploy"

## Lưu ý quan trọng

### Về API Routes
- Vercel serverless functions có timeout tối đa 60s (đã cấu hình trong vercel.json)
- Các route `/api/*` sẽ được handle bởi server/server.js

### Về Static Files
- Frontend build đã có sẵn trong thư mục `dist/`
- Assets sẽ được cache với max-age=31536000 (1 năm)

### Biến môi trường
Nếu cần thêm biến môi trường:
```bash
vercel env add KEY_NAME
```

Hoặc thêm trong Vercel Dashboard > Settings > Environment Variables

## Kiểm tra sau deploy

1. Truy cập URL được cung cấp bởi Vercel
2. Kiểm tra các API endpoints:
   - `/api/voices` - Danh sách giọng nói
   - `/api/tts` - Chuyển văn bản thành giọng nói
   - `/api/auth/login` - Đăng nhập

## Xử lý sự cố

### Lỗi timeout
- Tăng maxDuration trong vercel.json (tối đa 60s cho Hobby plan)

### Lỗi CORS
- Đã cấu hình cors() trong server.js

### Lỗi module ESM
- Server đã sử dụng dynamic import cho msedge-tts

## Liên hệ hỗ trợ
- Telegram: https://t.me/ttsohfree_group
