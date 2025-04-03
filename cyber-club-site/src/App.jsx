import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/ThemeController';
import About from './components/About';
import FAQ from './components/FAQ';
import EventInfo from './components/EventInfo';
import Board from './components/Board';
import Linktree from './components/Linktree';
import cyberlogo from '/cyberlogo.png';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false); // State to toggle icon

  const handleThemeToggle = () => {
    toggleTheme();
    setIsDarkMode(!isDarkMode); // Toggle the icon state
  };

  return (
    <div style={{ backgroundColor: theme.secondaryColor, color: theme.primaryColor }}>
      <Router>
        <div>
          <div className="toolbar-container">
          <img src={cyberlogo} className="logo" alt="CyberLogo" />
            <nav className="toolbar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/board">Board</Link>
                </li>
                <li>
                  <Link to="/linktree">Linktree</Link>
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
