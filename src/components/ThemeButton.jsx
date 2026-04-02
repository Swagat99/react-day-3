import React, { useState } from 'react';
import styles from './ThemeButton.module.css';

const ThemeButton = () => {
  const [theme, setTheme] = useState('Light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
  };

  const themeClass = theme === 'Light' ? styles.lightTheme : styles.darkTheme;

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <button
        className={`${styles.baseButton} ${themeClass}`}
        onClick={toggleTheme}
      >
        Switch to {theme === 'Light' ? 'Dark' : 'Light'} Mode
      </button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default ThemeButton;
