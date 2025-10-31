/* File: src/components/ThemeToggle.js */
import React from 'react';

const ThemeToggle = ({ onToggle, theme }) => {
  return (
    <button
      id="theme-toggle"
      className="btn btn-outline-secondary position-fixed bottom-0 end-0 m-3"
      onClick={onToggle}
    >
      <i className={`bi bi-${theme === 'light' ? 'moon' : 'sun'}`}></i>{' '}
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;