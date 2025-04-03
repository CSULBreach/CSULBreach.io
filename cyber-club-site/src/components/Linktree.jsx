import React from 'react';
import { useTheme } from './ThemeController';

const Linktree = () => {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.secondaryColor, color: theme.primaryColor }}>
      <h2>Linktree</h2>
      <a href="YOUR_LINKTREE_URL" target="_blank" rel="noopener noreferrer">
        Visit our Linktree
      </a>
    </div>
  );
};

export default Linktree;