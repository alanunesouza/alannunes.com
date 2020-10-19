import React from 'react';
import Layout from '../../components/Layout';

import * as styles from './styles';

function About() {
  return (
    <Layout>
      <styles.Container>
        <h1>Olá!</h1>

        <p>
          Meu nome é Alan Nunes. Sou desenvolvedor desde 2015 e me sinto entusiasmado a compartilhar conhecimento e evoluir
          cada vez mais.
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </p>

        <p>
          Atualmente, estou trabalhando como Desenvolvedor Front-end Senior na{' '}
          <a href="https://ri.b2w.digital/" target="_blank" rel="noopener noreferrer" itemProp="affiliation">
            B2W Digital
          </a>
          , procurando sempre estar atualizado nas tendências tecnológicas.
        </p>

        <p>
          Posso me considerar viciado em esportes: faço musculação há mais de 10 anos, acompanho muito futebol e ultimamente
          estou viciado em basquete.
        </p>

        <p>
          Nos tempos livres gosto de viajar, curtir um bom som num barzinho, ler livros, assistir filmes e séries, além de
          jogar muito video game.
        </p>
      </styles.Container>
    </Layout>
  );
}

export default About;
