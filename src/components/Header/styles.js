import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styled from 'styled-components';

import * as V from '../../styles/variables';

export const Header = styled.header.attrs({
  role: 'banner',
})`
  height: ${V.Height.headerSm};
  background-color: ${(props) => props.theme.headerBackground};
  transition: background-color 0.3s ease 0s;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  margin-bottom: 10px;
  z-index: 3;
  border-bottom: 3px ${(props) => props.theme.bold} solid;
  box-shadow: ${(props) => (props.themeIsDark ? 'rgba(112, 112, 129, 0.3)' : 'rgba(16, 27, 79, 0.5)')} 0 0 10px 5px;
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: ${V.MaxSize.lg};
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  height: 100%;
`;

export const AvatarDiv = styled(AniLink).attrs({
  cover: true,
  direction: 'bottom',
  bg: '#000',
})`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 ${V.Space.sm};

  @media (max-width: 420px) {
    justify-content: flex-start;
  }
`;

export const AvatarImgDiv = styled.div`
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  border: 2px solid ${(props) => props.theme.bold};
`;

export const AvatarImg = styled.img`
  width: 45px;
  height: 45px;
  border: 2px solid #7f5ba3;
  padding: 2px;
  border-radius: 100%;
`;

export const AvatarName = styled.span`
  font-size: ${V.Space.sm};
  font-weight: 600;
  color: ${(props) => props.theme.headerText};
  margin-left: 5px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

export const Options = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Option = styled(AniLink).attrs({
  cover: true,
  direction: 'bottom',
  bg: '#000',
})`
  font-size: 1.6rem;
  color: ${(props) => (props.selected ? props.theme.bold : props.theme.headerText)};
  margin: 0 ${V.Space.sm} 0 ${V.Space.sm};
  transition: border-color 0.25s ease 0s;
  padding: 0;
  height: 3.2rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid ${(props) => props.theme.bold};
    color: ${(props) => props.theme.bold};
  }
`;
