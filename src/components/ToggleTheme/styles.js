import styled from 'styled-components';

import * as V from '../../styles/variables';

export const ToggleTheme = styled.button.attrs(({ active }) => ({
  title: active ? 'Mudar para tema escuro' : 'Mudar para tema claro',
  role: 'button',
  'aria-pressed': !active,
}))`
  align-items: center;
  background-color: ${V.Color.grayDark};
  border-radius: ${V.Size.default};
  cursor: pointer;
  display: flex;
  height: ${V.Size.default};
  justify-content: space-between;
  padding-left: 4px;
  padding-right: 4px;
  position: relative;
  width: ${V.Size.lg};
  border: none;
  outline: 0;

  &:focus {
    outline: 0;
  }
  &:before,
  &:after {
    font-size: 18px;
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
  border: ${V.Color.blue} solid 2px;
  border-radius: 50%;
  height: var(--toggleTrack-size);
  position: absolute;
  /* left: 0; */
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
