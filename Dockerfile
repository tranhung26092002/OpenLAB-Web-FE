# Bước 1: Sử dụng image Node.js chính thức để build ứng dụng
FROM node:20 AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép các file cấu hình của dự án
COPY package.json .

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3000 để phục vụ ứng dụng
EXPOSE 3000

# Khởi động node
CMD ["npm", "start"]
