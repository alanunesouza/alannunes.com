import { Link } from 'gatsby';
import styled from 'styled-components';

import * as V from '../../styles/variables';

export const BlogItem = styled(Link).attrs({
  cover: true,
})`
  width: 100%;
  padding: ${V.Size.default};
  border: 2px solid ${(props) => props.theme.gray};
  display: inline-block;
  vertical-align: middle;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: ${V.Size.xs} 0;
  text-align: center;

  :hover {
    border: 2px solid ${(props) => props.theme.primary};
    transform: scale(1.03);
  }

  h2,
  small {
    color: ${(props) => props.theme.primary};
  }

  p {
    color: ${(props) => props.theme.grayLight};
    margin-top: ${V.Size.md};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
