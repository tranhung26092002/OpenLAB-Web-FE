import React, { useEffect, useRef } from 'react';
import L, { Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CompanyMap = () => {
  const mapRef = useRef<LeafletMap | null>(null);  // Khai báo kiểu dữ liệu cho mapRef

  useEffect(() => {
    const mapElement = document.getElementById('map');

    if (!mapRef.current && mapElement) {
      // Tạo bản đồ và thiết lập tọa độ trung tâm chỉ khi map chưa được khởi tạo
      mapRef.current = L.map(mapElement, {
        scrollWheelZoom: false // Tắt chức năng cuộn để thu phóng
      }).setView([20.9820423, 105.7873823], 17);

      // Thêm layer từ OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Thêm marker vào bản đồ
      L.marker([20.9820423, 105.7873823]).addTo(mapRef.current)
        .bindPopup('Công ty Cổ phần Công nghệ OpenLAB')
        .openPopup();

      // Lắng nghe sự kiện cuộn chuột
      mapElement.addEventListener('wheel', function(e) {
        if (e.ctrlKey) {  // Kiểm tra nếu người dùng đang giữ phím Ctrl
          mapRef.current?.scrollWheelZoom.enable();  // Kích hoạt chức năng cuộn để phóng to/thu nhỏ
        } else {
          mapRef.current?.scrollWheelZoom.disable();  // Vô hiệu hóa nếu không giữ Ctrl
        }
      });
    }
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default CompanyMap;
