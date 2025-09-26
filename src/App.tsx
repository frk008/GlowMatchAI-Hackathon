import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GlowMatchAI from './components/GlowMatchAI';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/glowmatch-ai" element={<GlowMatchAI />} />
            {/* Placeholder routes for other nav items */}
            <Route path="/skin" element={<div className="py-20 text-center text-2xl">Skin Section Coming Soon</div>} />
            <Route path="/makeup" element={<div className="py-20 text-center text-2xl">Makeup Section Coming Soon</div>} />
            <Route path="/hair" element={<div className="py-20 text-center text-2xl">Hair Section Coming Soon</div>} />
            <Route path="/nails" element={<div className="py-20 text-center text-2xl">Nails Section Coming Soon</div>} />
            <Route path="/style" element={<div className="py-20 text-center text-2xl">Style Section Coming Soon</div>} />
            <Route path="/news" element={<div className="py-20 text-center text-2xl">News Section Coming Soon</div>} />
            <Route path="/what-to-buy" element={<div className="py-20 text-center text-2xl">What to Buy Section Coming Soon</div>} />
            <Route path="/health-and-wellness" element={<div className="py-20 text-center text-2xl">Health & Wellness Section Coming Soon</div>} />
            <Route path="/about" element={<div className="py-20 text-center text-2xl">About Us Coming Soon</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;