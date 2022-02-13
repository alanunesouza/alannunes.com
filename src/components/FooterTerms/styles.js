import styled from 'styled-components';
import * as V from '../../styles/variables';

export const Container = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.primary};
  position: absolute;
  bottom: 7rem;
  margin: 0 auto;
  width: 100%;
  text-align: center;

  a {
    color: ${V.Color.blue};
    padding-left: 5px;
    padding-right: 5px;
  }
`;
