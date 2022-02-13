import React from 'react';

import Layout from '../components/Layout';
import * as styles from './styles';

export default function Home() {
  return (
    <Layout>
      <styles.Container>
        <h1>Olá!</h1>

        <p>
          Seja bem vindo ao meu site, e espero firmamente que você tenha uma boa experiência por aqui, e que eu possa
          contribuir com o seu conhecimento.
        </p>
      </styles.Container>
    </Layout>
  );
}
