import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.primary};
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 25px;
    line-height: 4rem;
  }

  svg {
    margin: 3rem;
    width: 280px;
    height: 280px;
  }
`;
