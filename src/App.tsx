import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import ScrollingProductMenu from './components/ScrollingProductMenu';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import VideoGallery from './components/VideoGallery';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import SerrureIntelligente from './components/SerrureIntelligente';
import DomotiqueCasablanca from './components/DomotiqueCasablanca';
import CamerasSurveillance from './components/CamerasSurveillance';
import ControleAcces from './components/ControleAcces';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductGallery />
              <Services />
              <Portfolio />
              <Contact />
              <VideoGallery />
            </>
          } />
          <Route path="/serrure-intelligente" element={<SerrureIntelligente />} />
          <Route path="/domotique-casablanca" element={<DomotiqueCasablanca />} />
          <Route path="/cameras-surveillance" element={<CamerasSurveillance />} />
          <Route path="/controle-acces" element={<ControleAcces />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;