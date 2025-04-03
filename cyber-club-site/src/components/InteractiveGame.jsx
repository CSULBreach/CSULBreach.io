import React from 'react';
import { useTheme } from './ThemeController';

const InteractiveGame = () => {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.secondaryColor, color: theme.primaryColor }}>
      <h2>Interactive Game</h2>
      <p>Coming Soon!</p>
    </div>
  );
};

export default InteractiveGame;