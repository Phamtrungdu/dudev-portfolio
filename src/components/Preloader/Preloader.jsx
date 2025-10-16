// filepath: src/components/Preloader/Preloader.jsx
import React from 'react';
import './Preloader.css';
// QUAN TRỌNG: Hãy tạo một hình ảnh (ví dụ: logo.png) và đặt vào thư mục 'src/assets/images'
import preloaderIcon from '../../assets/images/hero-image.jpg';

const Preloader = () => {
  return (
    <div className="preloader">
      {/* --- THÊM ICON/HÌNH ẢNH --- */}
      <div className="preloader-icon">
        <img src={preloaderIcon} alt="Loading icon" />
      </div>
      <div className="preloader-text">
        <p>Xin chào bạn,</p>
        <h1>Đã đến portfolio của tôi</h1>
      </div>
    </div>
  );
};

export default Preloader;