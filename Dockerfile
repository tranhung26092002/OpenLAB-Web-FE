# Bước 1: Sử dụng image Node.js chính thức để build ứng dụng
FROM node:20 AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép các file cấu hình của dự án
COPY package.json package-lock.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng React
RUN npm run build

# Bước 2: Sử dụng image Nginx để phục vụ ứng dụng
FROM nginx:alpine

# Sao chép build vào thư mục phục vụ của Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Cấu hình Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Mở cổng 80 để phục vụ ứng dụng
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
