import styled from 'styled-components';
import * as V from '../../styles/variables';

export const Container = styled.div`
  color: ${(props) => props.theme.primary};

  h1,
  p,
  li {
    margin-bottom: 25px;
    line-height: 3.4rem;
  }

  span {
    font-size: 1.8rem;
  }

  a {
    color: ${V.Color.blue};
  }
`;
