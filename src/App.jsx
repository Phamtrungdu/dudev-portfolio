import React, { useState, useEffect } from 'react';
import './App.css';

import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'; // Import component mới

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Đặt thời gian chờ là 3 giây (3000ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Xóa timer khi component bị unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="app-content">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
             <Projects /> 
            {/* Thêm các component khác của bạn ở đây */}
          </main>
        </div>
      )}
    </>
  );
};

export default App;
