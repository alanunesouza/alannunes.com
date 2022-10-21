import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import * as styles from './styles';

export default function Home() {
  return (
    <Layout>
      <styles.Container>
        <h1>Olá, bem vindo ao meu site!</h1>
        <styles.Profile>
          <StaticImage style={{ width: '300px' }} src="../assets/profile.png" alt="Profile" />
        </styles.Profile>
      </styles.Container>
    </Layout>
  );
}
