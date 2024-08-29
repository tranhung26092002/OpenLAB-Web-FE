# Sử dụng image Node.js chính thức để build ứng dụng
FROM node:20 AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép các file cấu hình vào container
COPY package.json package-lock.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng bằng Vite
RUN npm run build

# Sử dụng image Nginx để phục vụ ứng dụng
FROM nginx:alpine AS production

# Copy các file build từ giai đoạn build vào thư mục phục vụ của Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy file cấu hình Nginx tùy chỉnh nếu cần (không bắt buộc)
# COPY nginx.conf /etc/nginx/nginx.conf

# Mở cổng 80 để phục vụ ứng dụng
EXPOSE 3000

# Khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]
