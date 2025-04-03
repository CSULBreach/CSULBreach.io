import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#1D2E6C',
    secondaryColor: '#FFFFFF',
  });

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      primaryColor: prevTheme.primaryColor === '#1D2E6C' ? '#FFFFFF' : '#1D2E6C',
      secondaryColor: prevTheme.secondaryColor === '#FFFFFF' ? '#1D2E6C' : '#FFFFFF',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);