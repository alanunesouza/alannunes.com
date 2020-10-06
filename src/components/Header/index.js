import React from 'react';
import PropTypes from 'prop-types';

import ToggleTheme from '../ToggleTheme';

import * as S from './styles';

function Header({ location }) {
  return (
    <S.Header>
      <S.Menu>
        <S.AvatarDiv to="/" selected={location.pathname === ''}>
          <S.AvatarImg />
          <S.AvatarName>Alan Nunes</S.AvatarName>
        </S.AvatarDiv>

        <S.Options>
          <S.Option to="/about" selected={location.pathname.includes('/about')}>
            Sobre
          </S.Option>
          <S.Option to="/blog" selected={location.pathname.includes('/blog')}>
            Blog
          </S.Option>
        </S.Options>

        <S.Options>
          <ToggleTheme />
        </S.Options>
      </S.Menu>
    </S.Header>
  );
}

export default Header;

Header.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};
