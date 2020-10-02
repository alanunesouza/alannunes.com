import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { ThemeContext } from '../../contexts/ThemeContext';

import * as S from './styles';

function ToggleTheme() {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const changeTheme = () => {
    setThemeMode((t) => (t === 'theme-light' ? 'theme-dark' : 'theme-light'));
    localStorage.setItem('theme', themeMode === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  return (
    <S.ToggleTheme active={themeMode === 'theme-dark'} onClick={changeTheme}>
      <Helmet>
        <body className={`${themeMode}`} />
      </Helmet>
      <S.ToggleThemeTrack />
    </S.ToggleTheme>
  );
}

export default ToggleTheme;
