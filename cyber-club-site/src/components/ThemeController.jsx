import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const lightTheme = {
  primaryColor: '#000000',
  secondaryColor: '#ffffff',
  toolbarBackgroundGradient: 'linear-gradient(150deg, rgba(235,237,255,0.6363139005602241) 23%, rgba(201,201,201,0.5494791666666667) 47%, rgba(240,243,255,0.7175463935574229) 70%)',
  toolbarFontColor: '#000000',
};

const darkTheme = {
  primaryColor: '#ffffff',
  secondaryColor: '#000000',
  toolbarFontColor: '#ffffff',
  toolbarBackgroundGradient: 'linear-gradient(150deg, rgba(24,20,83,0.9388349089635855) 25%, rgba(38,19,62,0.9416360294117647) 47%, rgba(54,24,88,0.9388349089635855) 70%)',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);