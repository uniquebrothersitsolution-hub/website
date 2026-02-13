import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import GiftPage from './pages/GiftPage'
import PortfolioPage from './pages/PortfolioPage'
import Footer from './components/Footer'
import './index.css'

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Wrapper to apply transition classes
const PageWrapper = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gifts" element={<GiftPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
          </PageWrapper>
        </main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/918270150033"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="whatsapp-icon">💬</span>
        </a>
      </div>
    </Router>
  )
}

export default App
