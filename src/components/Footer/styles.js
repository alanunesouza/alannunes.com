import styled from 'styled-components';

import * as V from '../../styles/variables';

export const Footer = styled.footer.attrs({
  role: 'banner',
})`
  height: ${V.Height.headerSm};
  background-color: ${(props) => props.theme.footerBackground};
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin-top: 10px;
  z-index: ${V.ZIndex.footer};
  box-shadow: rgba(16, 27, 79, 0.15) 0 0 2px 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color ${V.Transition.default} ease 0s;
`;

export const SocialItem = styled.a`
  margin: 1rem;

  svg {
    height: 2.5rem;
    width: 2.5rem;
    color: ${(props) => props.theme.footerSvgColor};
    transition: color ${V.Transition.default} ease 0s;

    :hover {
      color: ${V.Color.blue};
    }
  }
`;

export const SocialIcon = styled.svg``;
