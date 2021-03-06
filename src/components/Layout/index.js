import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import { Location } from '@reach/router';

import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../../styles/global';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

import * as styles from './styles';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import { ThemeContext } from '../../contexts/ThemeContext';
import FooterTerms from '../FooterTerms';

function Layout({ children }) {
  const [themeMode, setThemeMode] = useState('theme-light');

  useEffect(() => {
    setThemeMode(localStorage.getItem('theme'));
  }, []);

  const pageName = (location) => {
    const page = location.pathname;

    if (page.includes('about')) {
      return 'Sobre';
    }

    if (page.includes('blog')) {
      return 'Blog';
    }

    if (page.includes('policies')) {
      return 'Políticas';
    }

    if (page === '/') {
      return 'Início';
    }

    return '';
  };

  return (
    <Location>
      {({ location }) => (
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
          <ThemeProvider theme={themeMode === 'theme-dark' ? dark : light}>
            <Helmet title={`${pageName(location)} | Alan Nunes`} />
            <styles.Container>
              <GlobalStyle />
              <TransitionPortal level="top">
                <Header location={location} />
              </TransitionPortal>
              <styles.Main>
                <Container>{children}</Container>
                <FooterTerms />
              </styles.Main>

              <TransitionPortal level="bottom">
                <Footer />
              </TransitionPortal>
            </styles.Container>
          </ThemeProvider>
        </ThemeContext.Provider>
      )}
    </Location>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
