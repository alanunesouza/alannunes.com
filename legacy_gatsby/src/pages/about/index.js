import React from 'react';
import Layout from '../../components/Layout';

import * as styles from './styles';

function About() {
  return (
    <Layout>
      <styles.Container>
        <p>
          Paulista, focado e observador, mas sempre aberto a uma boa troca de ideias e uma resenha descontraída. Fora do
          terminal, sou movido por esportes e games — universos que me ensinaram na prática o valor da disciplina, da tomada
          de decisão sob pressão, da curiosidade e do aprendizado constante, pilares que refletem diretamente em quem sou
          como engenheiro.
        </p>

        <p>
          Minha relação com o trabalho começou cedo, aos 16 anos, na área de Logística. Foi ali, como jovem aprendiz, que
          vivi a dinâmica do ambiente corporativo e aprendi a ter senso de responsabilidade e maturidade antes mesmo de
          escrever minha primeira linha de código comercial.
        </p>

        <p>
          Em 2014, durante a graduação em <i>Sistemas de Informação</i>, dei meus primeiros passos na área técnica atuando
          com suporte de TI. Foram anos fundamentais para entender dores reais de usuários e sistemas, mas o meu objetivo
          sempre foi a engenharia de software. A virada não foi fácil — enfrentei barreiras, descrença e momentos de
          incerteza em que precisei apostar tudo o que tinha na minha própria capacidade, investindo cada recurso em
          capacitação intensiva para construir minha oportunidade.
        </p>

        <p>
          Essa persistência abriu portas. Na consultoria (Opah IT), desenvolvi soluções para clientes de grande porte como
          Gerdau, SENAC e CVC. Em seguida, encarei os desafios de altíssima escala do e-commerce brasileiro na B2W Digital
          (Americanas, Submarino e Shoptime), atuando na esteira crítica de pós-compra, e consolidei minha atuação sênior no
          Luizalabs, contribuindo em um dos ecossistemas de tecnologia mais inovadores do país.
        </p>

        <p>
          Atualmente, sou <b>Senior Software Engineer</b> no&nbsp;
          <a href="https://www.mercadolivre.com.br" target="_blank" rel="noopener noreferrer" itemProp="affiliation">
            Mercado Livre
          </a>
          , onde desenho e construo sistemas resilientes e de alta vazão, com foco principal em <b>Back-End</b>,{' '}
          <b>Golang</b>, <b>arquitetura de microsserviços</b> e soluções orientadas a <b>Inteligência Artificial</b>.
        </p>

        <p>
          Mantenho a mente em evolução contínua: especializei minha trajetória com pós-graduações em Engenharia de Software e
          em Inteligência Artificial Aplicada. Acredito que a engenharia de ponta une rigor técnico, simplicidade e impacto
          humano — construindo tecnologias que facilitam o dia a dia de milhões de pessoas.
        </p>
      </styles.Container>
    </Layout>
  );
}

export default About;
