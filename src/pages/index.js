import React from 'react';

import Layout from '../components/Layout';
import * as styles from './styles';

export default function Home() {
  return (
    <Layout>
      <styles.Container>
        <h1>Olá!</h1>

        <p>
          Meu nome é Alan Nunes. Sou desenvolvedor desde 2015 e me sinto cada vez mais entusiasmado a compartilhar
          conhecimento e alcançar o próximo nível.{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </p>
      </styles.Container>
    </Layout>
  );
}
