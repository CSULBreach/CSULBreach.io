import React from 'react';
import { useTheme } from './ThemeController';

const Board = () => {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.secondaryColor, color: theme.primaryColor }}>
      <h2>Board Members</h2>
      <p>Meet the CULBreach board members.</p>
    </div>
  );
};

export default Board;