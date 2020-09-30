import styled from 'styled-components';

import * as V from '../../styles/variables';

export const Header = styled.header.attrs({
  role: 'banner',
})`
  height: ${V.Height.headerSm};
  background-color: ${(props) => props.theme.primary};
  transition: background-color 0.3s ease 0s;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  margin-bottom: 10px;
  z-index: 3;
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;
  height: ${V.Height.headerSm};
  align-items: center;
  max-width: ${V.MaxSize.lg};
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;

export const AvatarDiv = styled.div`
  display: flex;
  flex: 1;
`;

export const AvatarImg = styled.img``;

export const AvatarName = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${V.Color.white};
`;

export const Options = styled.div`
  display: flex;
  flex: 1;
`;

export const Option = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${V.Color.white};
  border: none;
  margin: ${V.Space.sm};
`;

export const ToggleTheme = styled.button.attrs(({ active }) => ({
  title: active ? 'Mudar para tema escuro' : 'Mudar para tema claro',
  role: 'button',
  'aria-pressed': !active,
}))`
  align-items: center;
  background-color: ${V.Color.grayDark};
  border-radius: ${V.Space.default};
  cursor: pointer;
  display: inline-flex;
  height: ${V.Space.default};
  justify-content: space-between;
  padding-left: 2px;
  padding-right: 2px;
  position: relative;
  width: ${V.Space.lg};

  &:focus {
    outline: 0;
  }
  &:before,
  &:after {
    font-size: 18px;
    margin-top: 0.5px;
  }
  &:before {
    content: '🌜';
  }
  &:after {
    content: '🌞';
  }
`;

export const ToggleThemeTrack = styled.div`
  --toggleTrack-size: 22px;
  background-color: ${V.Color.grayWhite};
  border: ${V.Color.purple} solid 2px;
  border-radius: 50%;
  height: var(--toggleTrack-size);
  position: absolute;
  left: 0;
  transition: transform ${V.Transition.default};
  width: var(--toggleTrack-size);
  z-index: ${V.ZIndex.header};
  .theme-light & {
    transform: translateX(0);
  }
  .theme-dark & {
    transform: translateX(100%);
  }
`;
