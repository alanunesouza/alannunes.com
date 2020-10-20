import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  font-size: 12px;
  color: ${(props) => props.theme.primary};

  a {
    color: ${(props) => props.theme.bold};
    padding-left: 5px;
    padding-right: 5px;
  }
`;
