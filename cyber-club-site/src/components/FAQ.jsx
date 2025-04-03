import React from 'react';
import { useTheme } from './ThemeController';

const FAQ = () => {
  const { theme } = useTheme();

  return (
    <div className="themed-container">
      <h2>FAQ</h2>
      <p>Frequently Asked Questions about CULBreach.</p>
    </div>
  );
};

export default FAQ;