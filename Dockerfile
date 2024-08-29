# Bước 1: Sử dụng image Node.js chính thức để build ứng dụng
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

# Bước 2: Sử dụng image Nginx để phục vụ ứng dụng trong môi trường production
FROM nginx:alpine AS production

# Copy các file build từ giai đoạn build vào thư mục phục vụ của Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Mở cổng 3000 để phục vụ ứng dụng
EXPOSE 3000

# Khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]
