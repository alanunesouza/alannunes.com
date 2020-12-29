import styled from 'styled-components';
import * as V from '../../styles/variables';

export const BlogPost = styled.div`
  padding: ${V.Size.default};
  color: ${(props) => props.theme.primary};
  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  h1 {
    margin-bottom: ${V.Size.default};
    font-weight: normal;
    font-size: ${V.Size.lg};
  }

  h2,
  h3,
  p {
    margin-bottom: ${V.Size.default};
    line-height: ${V.Size.md};
  }

  img {
    margin-bottom: ${V.Size.default} !important;
  }
`;
