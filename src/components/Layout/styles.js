import styled from 'styled-components';

import * as V from '../../styles/variables';

export const Container = styled.section`
  display: block;
  will-change: background-color;
  background-color: ${(props) => props.theme.background};
  transition: background-color ${V.Transition.default} ease 0s;
`;

export const Main = styled.main.attrs({
  role: 'main',
})`
  max-width: ${V.MaxSize.lg};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${V.Height.headerSm};
  padding: 0 ${V.Size.md};
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 ${V.Size.sm};
  }
`;
