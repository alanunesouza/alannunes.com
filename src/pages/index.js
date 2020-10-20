import React from 'react';

import Layout from '../components/Layout';
import * as styles from './styles';

export default function Home() {
  return (
    <Layout>
      <styles.Container>
        <h1>Olá!</h1>

        <p>
          Meu nome é Alan Nunes. Sou desenvolvedor desde 2015 e me sinto inspirado a compartilhar conhecimento e evoluir
          minhas hard e soft skills.{' '}
        </p>

        <p>Por meio deste site, vou trazer bastante conteúdo, além de meus trabalhos profissionais.</p>

        <bold>Aguarde... :)</bold>
      </styles.Container>
    </Layout>
  );
}
