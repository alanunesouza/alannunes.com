import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import * as V from '../../styles/variables';

export const BlogItem = styled(AniLink).attrs({})`
  padding: ${V.Size.default};
  border: 2px solid ${(props) => props.theme.gray};
  display: inline-block;
  vertical-align: middle;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

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
  }
`;
