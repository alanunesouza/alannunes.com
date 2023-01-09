import { Link } from 'gatsby';

import styled from 'styled-components';

import * as V from '../../styles/variables';

export const Header = styled.header.attrs({
  role: 'banner',
})`
  height: ${V.Height.headerSm};
  background-color: ${(props) => props.theme.headerBackground};
  transition: background-color ${V.Transition.default} ease 0s;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  margin-bottom: 10px;
  z-index: 3;
  box-shadow: ${(props) => (props.themeIsDark ? 'rgba(112, 112, 129, 0.3)' : 'rgba(16, 27, 79, 0.5)')} 0 0 10px 5px;
  z-index: ${V.ZIndex.header};
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

export const AvatarDiv = styled(Link).attrs({
  cover: true,
})`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0 ${V.Size.sm};

  @media (max-width: 420px) {
    justify-content: flex-start;
  }
`;

export const AvatarImgDiv = styled.div`
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  border: 2px solid ${V.Color.blue};
`;

export const AvatarName = styled.span`
  font-size: 2rem;
  font-weight: ${V.Font.bold};
  color: ${(props) => props.theme.headerText};
  font-family: 'Signika', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const FirstN = styled(AvatarName)`
  color: ${V.Color.blue};
`;

export const SecondN = styled(AvatarName)`
  color: ${V.Color.orange};
`;

export const Options = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const ThemeDiv = styled(Options)`
  justify-content: flex-end;
`;

export const Option = styled(Link).attrs({
  cover: true,
  direction: 'bottom',
  bg: '#000',
})`
  font-size: 1.6rem;
  color: ${(props) => props.theme.headerText};
  margin: 0 ${V.Size.sm} 0 ${V.Size.sm};
  transition: border-color ${V.Transition.default} ease 0s;
  padding: 0;
  height: 3.2rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  font-weight: ${V.Font.bold};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
  -webkit-text-decoration-color: ${V.Color.orange};
  text-decoration-color: ${V.Color.orange};
  -webkit-text-decoration-style: wavy;
  text-decoration-style: wavy;
`;
