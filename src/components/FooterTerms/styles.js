import styled from 'styled-components';
import * as V from '../../styles/variables';

export const Container = styled.div`
  color: ${(props) => props.theme.primary};
  font-size: 12px;
  padding: 0 ${V.Size.sm};
  padding-bottom: ${V.Height.headerLg};
  width: 100%;
  text-align: center;

  a {
    color: ${(props) => props.theme.primary};
    line-height: ${V.Size.sm};
  }
`;
