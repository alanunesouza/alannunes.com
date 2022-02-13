import React from 'react';
import Layout from '../../components/Layout';

import * as styles from './styles';

function About() {
  return (
    <Layout>
      <styles.Container>
        <h1>Olá!</h1>

        <p>
          Sou dev desde 2015 e venho me aventurando nessa área tecnológica tão vasta e popular, que vem cada vez mais
          ganhando força e impactando no dia a dia de todos.
        </p>

        <p>
          Atualmente, sou desenvolvedor Senior na{' '}
          <a
            href="https://www.linkedin.com/company/luizalabs/"
            target="_blank"
            rel="noopener noreferrer"
            itemProp="affiliation"
          >
            Luizalabs
          </a>
          , uma das maiores empresas de inovação e tecnologia do Brasil.
        </p>

        <p>
          Me considero um dev apaixonado por esportes e games, e acredito que ambos me ajudaram e ainda ajudam a evoluir como
          um profissional.
        </p>

        <p>
          Meus hobbies são viajar muito, conhecer novos lugares, curtir um bom som em pubs, ler livros, assistir filmes e
          séries, e muito mais.
        </p>
      </styles.Container>
    </Layout>
  );
}

export default About;
