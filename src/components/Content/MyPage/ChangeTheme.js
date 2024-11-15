import React from 'react';
import { useTheme } from './ThemeContext';

const ChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="change-theme">
      <button onClick={toggleTheme} className="change-theme-button">
        {theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
      </button>
    </div>
  );
};

export default ChangeTheme;
