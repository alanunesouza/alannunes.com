import styled from 'styled-components';

import * as V from '../styles/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primary};
  flex-direction: column;

  h1,
  p {
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

export const Profile = styled.div`
  display: flex;
`;
