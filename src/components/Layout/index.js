import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import { Location } from '@reach/router';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

import * as styles from './styles';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import { ThemeContext } from '../../contexts/ThemeContext';

function Layout({ children }) {
  const [themeMode, setThemeMode] = useState('theme-light');

  useEffect(() => {
    setThemeMode(localStorage.getItem('theme'));
  }, []);

  return (
    <Location>
      {({ location }) => (
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
          <ThemeProvider theme={themeMode === 'theme-dark' ? dark : light}>
            <styles.Container>
              <GlobalStyle />
              <TransitionPortal level="top">
                <Header location={location} />
              </TransitionPortal>
              <styles.Main>
                <Container>{children}</Container>
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
