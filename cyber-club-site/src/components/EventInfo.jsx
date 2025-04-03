import React from 'react';
import { useTheme } from './ThemeController';

const EventInfo = () => {
  const { theme } = useTheme();

  return (
    <div className="themed-container">
      <h2>Event Information</h2>
      <p>Information about upcoming and past events.</p>
    </div>
  );
};

export default EventInfo;