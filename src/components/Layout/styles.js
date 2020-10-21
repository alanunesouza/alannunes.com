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
  min-height: 100vh;
  max-width: ${V.MaxSize.lg};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${V.Height.headerSm};
  margin-bottom: ${V.Height.headerSm};
  padding-top: ${V.Size.md};
  padding-left: ${V.Size.md};
  padding-right: ${V.Size.md};
  padding-bottom: ${V.Size.sm};
`;
