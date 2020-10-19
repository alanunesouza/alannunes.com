import React from 'react';
import SvgConstruction from '../../assets/SvgConstruction';
import Layout from '../../components/Layout';

import * as styles from './styles';

function Blog() {
  return (
    <Layout>
      <styles.Container>
        <h1>Página em construção</h1>
        <SvgConstruction />
        <span>
          Icons made by{' '}
          <a href="https://www.flaticon.com/free-icon/under-construction_2422166" title="ultimatearm">
            ultimatearm
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {' '}
            www.flaticon.com
          </a>
        </span>
      </styles.Container>
    </Layout>
  );
}

export default Blog;
