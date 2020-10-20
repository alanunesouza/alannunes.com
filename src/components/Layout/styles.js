import styled from 'styled-components';

import * as V from '../../styles/variables';

export const Container = styled.section`
  display: block;
  will-change: background-color;
  background-color: ${(props) => props.theme.background};
  transition: background-color 0.3s ease 0s;
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
  padding-top: ${V.Space.md};
  padding-left: ${V.Space.md};
  padding-right: ${V.Space.md};
  padding-bottom: ${V.Space.sm};
`;
