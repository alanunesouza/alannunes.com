import React from 'react';

import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <S.Menu>
        <S.AvatarDiv>
          <S.AvatarImg />
          <S.AvatarName>Alan Nunes</S.AvatarName>
        </S.AvatarDiv>

        <S.Options>
          <S.Option>Me</S.Option>
          <S.Option>Blog</S.Option>
        </S.Options>

        <S.ToggleTheme active={false}>
          <S.ToggleThemeTrack />
        </S.ToggleTheme>
      </S.Menu>
    </S.Header>
  );
}

export default Header;
