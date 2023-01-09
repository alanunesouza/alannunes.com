import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
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

export const pageQuery = graphql`
  query {
    blog: allMarkdownRemark(limit: 2, sort: { order: DESC, fields: [frontmatter___date] }) {
      posts: nodes {
        frontmatter {
          date(fromNow: true, locale: "pt-br")
          title
          author
        }
        fields {
          slug
        }
        timeToRead
        excerpt
        id
      }
    }
  }
`;
