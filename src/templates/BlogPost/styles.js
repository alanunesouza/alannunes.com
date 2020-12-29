import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import * as V from '../../styles/variables';

export const BlogPost = styled.div`
  padding: ${V.Size.default};
  color: ${(props) => props.theme.primary};
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  h1 {
    margin-bottom: ${V.Size.default};
    font-weight: normal;
    font-size: ${V.Size.lg};
    overflow-wrap: break-word;
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

  a,
  a:visited {
    color: ${(props) => props.theme.gray};
  }
`;

export const BackButton = styled(AniLink)`
  display: block;
  margin-bottom: ${V.Size.default};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  transition: color ${V.Transition.default} ease 0s;
`;
