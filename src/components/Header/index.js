import React from 'react';
import PropTypes from 'prop-types';

import ToggleTheme from '../ToggleTheme';

import * as S from './styles';

function Header({ location }) {
  return (
    <S.Header>
      <S.Menu>
        <S.AvatarDiv>
          <S.AvatarImg />
          <S.AvatarName>Alan Nunes</S.AvatarName>
        </S.AvatarDiv>

        <S.Options>
          <S.Option to="/me" selected={location.pathname === '/me/'}>
            Me
          </S.Option>
          <S.Option to="/blog" selected={location.pathname === '/blog/'}>
            Blog
          </S.Option>
        </S.Options>

        <ToggleTheme />
      </S.Menu>
    </S.Header>
  );
}

export default Header;

Header.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};
