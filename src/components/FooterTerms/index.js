import React from 'react';
import ReactGA from 'react-ga';

import * as styles from './styles';

function FooterTerms() {
  const handleClick = (name) => {
    ReactGA.event({
      category: 'FooterTerms',
      action: 'Click in link',
      label: name,
    });
  };

  return (
    <styles.Container>
      ©2020 alannunes.com •{' '}
      <a onClick={() => handleClick('policies')} href="/policies">
        Política de Privacidade
      </a>{' '}
      •{' '}
      <a
        onClick={() => handleClick('license')}
        href="https://github.com/alanunesouza/alannunes.com/blob/master/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
      >
        Termos de Uso
      </a>
    </styles.Container>
  );
}

export default FooterTerms;
