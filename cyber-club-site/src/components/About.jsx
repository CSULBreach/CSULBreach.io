import React from 'react';
import { useTheme } from './ThemeController';

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="themed-container">
      <h2>About Us</h2>
      <p>This is the about page for CULBreach.</p>
    </div>
  );
};

export default About;