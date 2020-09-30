import React from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import GlobalStyle from '../../styles/global';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

import * as styles from './styles';

function Layout({ children }) {
  return (
    <styles.Container>
      <GlobalStyle />
      <TransitionPortal level="top">
        <Header />
      </TransitionPortal>
      <styles.Main>
        <Container>{children}</Container>
      </styles.Main>

      <TransitionPortal level="bottom">
        <Footer />
      </TransitionPortal>
    </styles.Container>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
