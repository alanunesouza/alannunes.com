import React from 'react';
import PropTypes from 'prop-types';

import ToggleTheme from '../ToggleTheme';

import * as S from './styles';

function Header({ location }) {
  return (
    <S.Header themeIsDark={typeof window !== 'undefined' && localStorage.getItem('theme') === 'theme-dark'}>
      <S.Menu>
        <S.AvatarDiv to="/" selected={location.pathname === ''}>
          <S.AvatarName>
            ala<S.FirstN>n</S.FirstN>
            <S.SecondN>n</S.SecondN>unes
          </S.AvatarName>
        </S.AvatarDiv>

        <S.Options>
          <S.Option to="/blog" selected={location.pathname.includes('/blog')}>
            Blog
          </S.Option>
          <S.Option to="/about" selected={location.pathname.includes('/about')}>
            Sobre
          </S.Option>
        </S.Options>

        <S.ThemeDiv>
          <ToggleTheme />
        </S.ThemeDiv>
      </S.Menu>
    </S.Header>
  );
}

export default Header;

Header.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};
