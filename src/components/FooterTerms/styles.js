import styled from 'styled-components';
import * as V from '../../styles/variables';

export const Container = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: 12px;
  margin: 0 auto;
  padding-bottom: ${V.Height.headerSm};
  width: 100%;
  text-align: center;

  a {
    color: ${(props) => props.theme.primary};
    line-height: ${V.Size.md};
  }
`;
