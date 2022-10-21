/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Layout from '../../components/Layout';
import * as styles from './styles';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const url = `https://alannunes.com/${post.fields.slug}`;
  const disqusConfig = { identifier: post.id, title: post.frontmatter.title, url };

  return (
    <Layout>
      <styles.BlogPost>
        <styles.BackButton to="/posts" rel="prev">
          ← voltar
        </styles.BackButton>
        <div>
          <time>
            <span>{format(new Date(post.frontmatter.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
            <span> · Leitura de {post.timeToRead} min</span>
          </time>
        </div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Disqus config={disqusConfig} />
      </styles.BlogPost>
    </Layout>
  );
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
      timeToRead
      id
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
