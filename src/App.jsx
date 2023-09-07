import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './ui/Header';
import Footer from './ui/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  });
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
