# Hướng dẫn Deploy VibeTTS Web App

## 🚀 Các phương pháp deploy

### Phương pháp 1: Deploy lên Render.com (Miễn phí)

#### Bước 1: Chuẩn bị
1. Tạo tài khoản tại https://render.com
2. Push code lên GitHub/GitLab

#### Bước 2: Tạo Web Service trên Render
1. Vào Dashboard → New → Web Service
2. Connect repository GitHub của bạn
3. Cấu hình:
   - **Name**: vibetts-api
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `node server/server.js`
   - **Port**: 3001 (Render sẽ tự động set biến môi trường PORT)

#### Bước 3: Cấu hình thêm
- Chọn plan **Free**
- Auto-deploy: Bật (tự động deploy khi push code mới)
- Nhấn "Create Web Service"

#### Bước 4: Kiểm tra
- Sau 2-5 phút, service sẽ chạy
- Truy cập URL: `https://vibetts-api.onrender.com`

---

### Phương pháp 2: Deploy lên Railway.app (Miễn phí với giới hạn)

#### Bước 1: Chuẩn bị
1. Tạo tài khoản tại https://railway.app
2. Kết nối GitHub account

#### Bước 2: Deploy
1. New Project → Deploy from GitHub repo
2. Chọn repository VibeTTS
3. Railway tự động detect Node.js và cài đặt

#### Bước 3: Cấu hình
- Variables: Thêm `PORT=3001` nếu cần
- Settings → Domains: Custom domain (tuỳ chọn)

---

### Phương pháp 3: Deploy lên Vercel (Cần điều chỉnh)

**Lưu ý**: VibeTTS sử dụng Express server với WebSocket/streaming nên cần cấu hình đặc biệt.

#### Bước 1: Tạo file `vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/server.js",
      "use": "@vercel/node"
    },
    {
      "src": "dist/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "dist/$1"
    }
  ]
}
```

#### Bước 2: Cài đặt Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

### Phương pháp 4: Deploy lên Heroku

#### Bước 1: Cài đặt Heroku CLI
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Ubuntu/Debian
curl https://cli-assets.heroku.com/install.sh | sh
```

#### Bước 2: Login và tạo app
```bash
heroku login
heroku create vibetts-app
git push heroku main
```

#### Bước 3: Cấu hình Procfile
Tạo file `Procfile` (không có extension):
```
web: node server/server.js
```

---

### Phương pháp 5: Tự host trên VPS (Ubuntu/Debian)

#### Bước 1: Cài đặt Node.js và PM2
```bash
# Cập nhật hệ thống
sudo apt update && sudo apt upgrade -y

# Cài Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Cài PM2
sudo npm install -g pm2

# Cài FFmpeg (cần cho audio processing)
sudo apt install -y ffmpeg
```

#### Bước 2: Clone và cài đặt project
```bash
git clone <your-repo-url>
cd VibeTTS
npm install
npm run build
```

#### Bước 3: Chạy với PM2
```bash
pm2 start server/server.js --name vibetts
pm2 save
pm2 startup
```

#### Bước 4: Cấu hình Nginx (reverse proxy)
```bash
sudo apt install -y nginx
sudo nano /etc/nginx/sites-available/vibetts
```

Thêm cấu hình:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Kích hoạt:
```bash
sudo ln -s /etc/nginx/sites-available/vibetts /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Bước 5: Cài SSL với Let's Encrypt
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🔧 Biến môi trường cần thiết

Tuỳ platform, bạn có thể cần set các biến sau:

```bash
PORT=3001                    # Port của server
NODE_ENV=production          # Môi trường production
```

---

## ✅ Checklist trước khi deploy

- [ ] Đã test local với `npm start`
- [ ] Đã build frontend với `npm run build`
- [ ] File `dist/` đã được generate
- [ ] Dependencies đầy đủ trong `package.json`
- [ ] Không có hardcoded localhost URLs
- [ ] Đã commit và push lên Git

---

## 🐛 Xử lý lỗi thường gặp

### Lỗi: "Cannot find module 'msedge-tts'"
```bash
npm install msedge-tts --save
```

### Lỗi: Port already in use
```bash
# Tìm process đang dùng port 3001
lsof -i :3001
# Kill process
kill -9 <PID>
```

### Lỗi: CORS error trên production
Đảm bảo server có `app.use(cors())` và cấu hình đúng domain.

### Lỗi: Audio stream không hoạt động
Kiểm tra firewall và đảm bảo port 3001 được mở.

---

## 📊 So sánh các platform

| Platform | Miễn phí | Dễ dùng | Performance | Ghi chú |
|----------|----------|---------|-------------|---------|
| Render   | ✅ Có    | ⭐⭐⭐⭐⭐  | Tốt         | Sleep sau 15p idle |
| Railway  | ✅ Có*   | ⭐⭐⭐⭐⭐  | Rất tốt     | $5 credit/tháng free |
| Vercel   | ✅ Có    | ⭐⭐⭐⭐   | Xuất sắc    | Cần điều chỉnh cho streaming |
| Heroku   | ❌ Không | ⭐⭐⭐⭐   | Tốt         | $7/tháng trở lên |
| VPS      | 💰 Trả phí | ⭐⭐⭐  | Xuất sắc    | Toàn quyền kiểm soát |

---

## 🎯 Khuyến nghị

- **Cho demo/test**: Dùng Render.com (miễn phí, dễ setup)
- **Cho production nhỏ**: Railway.app hoặc VPS giá rẻ ($5/tháng)
- **Cho scale lớn**: AWS, Google Cloud, hoặc VPS dedicated

---

**Liên hệ hỗ trợ**: Nếu gặp khó khăn, check logs trên platform hoặc tạo issue trên GitHub.
