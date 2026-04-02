import React, { useState } from 'react';
import styles from './ThemeButton.module.css';

const ThemeButton = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeClass = theme === 'light' ? styles.lightTheme : styles.darkTheme;

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <button 
        className={`${styles.baseButton} ${themeClass}`}
        onClick={toggleTheme}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default ThemeButton;
