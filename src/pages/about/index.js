import React from 'react';
import Layout from '../../components/Layout';

import * as styles from './styles';

function About() {
  return (
    <Layout>
      <styles.Container>
        <p>
          Sou um dev paulista, com um perfil mais quieto e focado, mas que sabe reconhecer os momentos de se divertir e fazer
          aquela resenha. Me considero um dev apaixonado por esportes e games, e acredito sim, que o esporte, a diversão, a
          curiosidade e o aprendizado na vida, influenciam e muito na evolução profissional do indivíduo.
        </p>

        <p>
          Comecei minha carreira dev em 2015, mas antes disso, tive uma trajetória tanto quanto curiosa... Iniciei na área de
          Logística aos 16 anos, como aprendiz. Ali pude aprender muito sobre o dia a dia do mundo corporativo e isso me
          ajudou a amadurecer.
        </p>

        <p>
          Em 2014, já estava cursando <i>Sistemas de Informação</i>, e consegui minha primeira oportunidade na área de
          Tecnologia, como estagiário na área de Suporte. Foi uma experiência única, que dou muito valor, porque acredito que
          tudo na vida te ensina algo. Fiquei 2 anos como estagiário e migrei para uma outra empresa, ainda na área de
          suporte, porém nessa outra empresa, havia oportunidade da migração para a área de desenvolvimento (que sempre foi o
          meu objetivo). Busquei e consegui minha entrar na área de desenvolvimento, porém nem tudo saiu como planejado, tive
          um ínicio um pouco difícil, com líderes incapazes de enxergar qualquer potêncial em mim.
        </p>

        <p>
          Perdi meu emprego, e quase desisti de fato da programação, mas resolvi provar para mim mesmo que eu era capaz...
          Peguei o restinho da grana que eu tinha, e comprei cursos de programação para mergulhar no código e tentar uma
          última cartada. Em menos de 2 meses, recebi uma oportunidade de trabalho como desenvolvedor PHP, onde minha vida
          profissional mudou e acredito que foi um marco na minha vida. Trabalhava em consultoria, pude ajudar a entregar
          soluções para vários clientes como Gerdau, SENAC, CVC, entre outras, aprendendo e aplicando linguagens e
          tecnologias diferentes... Conheci pessoas e projetos íncriveis. Também atuei por alguns anos na B2W
          (Americanas/Submarino/Shoptime), atuando em projetos desafiadores relacionadas a área de pós compra.
        </p>

        <p>
          Depois desse tanto de acidentes de percurso, finalmente pude sentir que minha carreira estava no caminho que eu
          sempre sonhei.
        </p>

        <p>
          Atualmente, sou desenvolvedor FrontEnd Senior na&nbsp;
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
          Tenho uma paixão muito grande pelo que faço, pois é uma área com crescimento exponencial, onde sempre estou
          aprendendo algo novo. Com isso, a área me dá a oportunidade de ajudar as pessoas através de tecnologia de alguma
          maneira.
        </p>
      </styles.Container>
    </Layout>
  );
}

export default About;
