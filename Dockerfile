# Sử dụng Node.js phiên bản 20 (Alpine nhẹ hơn)
FROM node:20-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép file phụ thuộc trước (tối ưu cache Docker)
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install --only=production

# Sao chép mã nguồn còn lại
COPY . .

# Chạy lệnh build (React)
RUN npm run build

# Cài đặt gói `serve` để phục vụ ứng dụng React
RUN npm install -g serve

# Mở cổng 3000 để phục vụ ứng dụng
EXPOSE 3000

# Khởi động ứng dụng React (build đã được phục vụ)
CMD ["serve", "-s", "build", "-l", "3000"]
