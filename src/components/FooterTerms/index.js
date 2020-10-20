import React from 'react';

import * as styles from './styles';

function FooterTerms() {
  return (
    <styles.Container>
      ©2020 alannunes.com • <a href="/policies">Política de Privacidade</a> •{' '}
      <a href="https://github.com/alanunesouza/alanunes.com/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
        Termos de Uso
      </a>
    </styles.Container>
  );
}

export default FooterTerms;
