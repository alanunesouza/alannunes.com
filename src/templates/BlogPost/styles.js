import styled from 'styled-components';
import { Link } from 'gatsby';
import * as V from '../../styles/variables';

export const BlogPost = styled.div`
  padding: ${V.Size.default};
  color: ${(props) => props.theme.primary};

  h1 {
    margin-bottom: ${V.Size.default};
    font-weight: ${V.Font.light};
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
    width: 100%;
  }

  a,
  a:visited {
    color: ${(props) => props.theme.contrast};
  }

  blockquote {
    margin: 1.5em 10px;
    padding: 1em 10px 0.1em 10px;
  }
  blockquote p {
    font-style: italic;
    color: ${(props) => props.theme.gray};
  }

  ul {
    list-style: circle;
  }

  li {
    margin-left: 4rem;
    line-height: 3rem;
    font-weight: ${V.Font.light};
  }

  #disqus_thread {
    a {
      color: ${(props) => props.theme.gray};
    }
  }
`;

export const BackButton = styled(Link)`
  display: block;
  margin-bottom: ${V.Size.default};
  transition: color ${V.Transition.default} ease 0s;
`;
