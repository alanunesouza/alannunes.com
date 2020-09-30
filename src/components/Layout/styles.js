import styled from 'styled-components';

import * as V from '../../styles/variables';

export const Container = styled.section`
  display: block;
  will-change: background-color;
`;

export const Main = styled.main.attrs({
  role: 'main',
})`
  min-height: 100vh;
  max-width: ${V.MaxSize.lg};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${V.Height.headerSm};
  padding-top: ${V.Space.md};
`;
