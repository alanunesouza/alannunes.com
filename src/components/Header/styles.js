import { Link } from 'gatsby';
import styled from 'styled-components';

import * as V from '../../styles/variables';

export const Header = styled.header.attrs({
  role: 'banner',
})`
  height: ${V.Height.headerSm};
  background-color: ${(props) => props.theme.headerBackground};
  transition: background-color 0.3s ease 0s;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  margin-bottom: 10px;
  z-index: 3;
  border-bottom: 2px ${(props) => props.theme.headerText} solid;
  box-shadow: rgba(16, 27, 79, 0.15) 0 0 10px 5px;
`;

export const Menu = styled.div`
  display: flex;
  flex: 1;
  height: ${V.Height.headerSm};
  align-items: center;
  max-width: ${V.MaxSize.lg};
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;

export const AvatarDiv = styled.div`
  display: flex;
  flex: 1;
`;

export const AvatarImg = styled.img``;

export const AvatarName = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.headerText};
`;

export const Options = styled.div`
  display: flex;
  flex: 1;
`;

export const Option = styled(Link)`
  font-size: 1.6rem;
  font-weight: ${(props) => (props.selected ? 'bold' : 500)};
  color: ${(props) => props.theme.headerText};
  margin: 0 ${V.Space.sm} 0 ${V.Space.sm};
  padding-bottom: 1.6px;
  height: 3.2rem;
  display: flex;
  align-items: center;

  :hover {
    padding-bottom: 0px;
    font-weight: bold;
    border-bottom: 2px solid ${(props) => props.theme.headerText};
  }
`;
