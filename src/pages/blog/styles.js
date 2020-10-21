import styled from 'styled-components';

import * as V from '../../styles/variables';

export const Container = styled.div`
  color: ${(props) => props.theme.primary};
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 25px;
    line-height: 4rem;
    transition: color ${V.Transition.default} ease 0s;
  }

  a {
    color: ${(props) => props.theme.bold};
  }

  svg {
    margin: 3rem;
    width: 280px;
    height: 280px;
  }
`;
