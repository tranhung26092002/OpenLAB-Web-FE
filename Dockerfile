# Bước 1: Sử dụng image Node.js chính thức để build ứng dụng
FROM node:20 AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép các file cấu hình của dự án
COPY package.json .
COPY package-lock.json .

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng React
RUN npm run build

# Bước 2: Sử dụng image Nginx để phục vụ ứng dụng
FROM nginx:alpine

# Sao chép build output từ bước build vào Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Sao chép cấu hình Nginx tùy chỉnh vào container
COPY nginx.conf /etc/nginx/nginx.conf

# Mở cổng 80 và 443 để phục vụ ứng dụng
EXPOSE 80
EXPOSE 443

# Khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]
