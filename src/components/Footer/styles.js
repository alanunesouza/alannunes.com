import styled from 'styled-components';

import * as V from '../../styles/variables';

export const Footer = styled.footer.attrs({
  role: 'banner',
})`
  height: ${V.Height.headerSm};
  background-color: ${(props) => props.theme.headerBackground};
  transition: background-color 0.3s ease 0s;
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin-top: 10px;
  z-index: 3;
  box-shadow: rgba(16, 27, 79, 0.15) 0 0 2px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialItem = styled.a`
  margin: 1rem;

  svg {
    height: 2.5rem;
    width: 2.5rem;

    color: ${(props) => props.theme.bold};
  }
`;

export const SocialIcon = styled.svg``;
