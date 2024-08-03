# Bước 1: Sử dụng image Node.js chính thức để build ứng dụng
FROM node:20 AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép các file cấu hình của dự án
COPY package.json package-lock.json ./
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng
RUN npm run build

# Bước 2: Sử dụng image Nginx để phục vụ ứng dụng
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
