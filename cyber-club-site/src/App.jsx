import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/ThemeController';
import About from './components/About';
import FAQ from './components/FAQ';
import EventInfo from './components/EventInfo';
import Board from './components/Board';
import Linktree from './components/Linktree';
import cyberlogoblack from '/Cyber_Logo_Black.png';
import cyberlogowhite from '/Cyber_Logo_White.png';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false); // State to toggle icon

  const handleThemeToggle = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode); // Toggle the icon state
  };

  const linkHoverStyle = {
    textShadow: isDarkMode
      ? '0 0 10px #ffffff, 0 0 20px #ffffff' // White glow for dark mode
      : '0 0 10px #000000, 0 0 20px #000000', // Black glow for light mode
  };

  return (
    <div style={{ backgroundColor: theme.secondaryColor, color: theme.primaryColor }}>
      <Router>
        <div>
          <div
            className="toolbar-container"
            style={{
              background: theme.toolbarBackgroundGradient,
              color: theme.toolbarFontColor,
            }}
          >
            <img
              src={isDarkMode ? cyberlogowhite : cyberlogoblack}
              className="logo"
              alt="CyberLogo"
            />
            <nav className="toolbar">
              <ul>
                <li>
                  <Link
                    style={{ color: theme.toolbarFontColor }}
                    onMouseEnter={(e) => (e.target.style.textShadow = linkHoverStyle.textShadow)}
                    onMouseLeave={(e) => (e.target.style.textShadow = 'none')}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: theme.toolbarFontColor }}
                    onMouseEnter={(e) => (e.target.style.textShadow = linkHoverStyle.textShadow)}
                    onMouseLeave={(e) => (e.target.style.textShadow = 'none')}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: theme.toolbarFontColor }}
                    onMouseEnter={(e) => (e.target.style.textShadow = linkHoverStyle.textShadow)}
                    onMouseLeave={(e) => (e.target.style.textShadow = 'none')}
                    to="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: theme.toolbarFontColor }}
                    onMouseEnter={(e) => (e.target.style.textShadow = linkHoverStyle.textShadow)}
                    onMouseLeave={(e) => (e.target.style.textShadow = 'none')}
                    to="/events"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: theme.toolbarFontColor }}
                    onMouseEnter={(e) => (e.target.style.textShadow = linkHoverStyle.textShadow)}
                    onMouseLeave={(e) => (e.target.style.textShadow = 'none')}
                    to="/board"
                  >
                    Board
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: theme.toolbarFontColor }}
                    onMouseEnter={(e) => (e.target.style.textShadow = linkHoverStyle.textShadow)}
                    onMouseLeave={(e) => (e.target.style.textShadow = 'none')}
                    to="https://linktr.ee/csulbcybersecurity?utm_source=linktree_admin_share"
                  >
                    Linktree
                  </Link>
                </li>
              </ul>
            </nav>
            <button className="theme-toggle-button" onClick={handleThemeToggle}>
              {isDarkMode ? '🌙' : '☀️'}
            </button>
          </div>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/events" element={<EventInfo />} />
              <Route path="/board" element={<Board />} />
              <Route path="/linktree" element={<Linktree />} />
              <Route path="/" element={<Home />} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  const { theme } = useTheme();
  return (
    <div style={{ backgroundColor: theme.secondaryColor, color: theme.primaryColor }}>
      <h2>Home</h2>
      <p>Welcome to the CULBreach website!</p>
    </div>
  );
}

export default App;
