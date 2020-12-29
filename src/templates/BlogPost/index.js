/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ReactDisqusComments from 'react-disqus-comments';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Layout from '../../components/Layout';
import * as styles from './styles';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const url = `https://alannunes.com/${post.fields.slug}`;

  return (
    <Layout>
      <styles.BlogPost>
        <time>
          <span>{format(new Date(post.frontmatter.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
          <span> · Leitura de {post.timeToRead} min</span>
        </time>
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ReactDisqusComments shortname="alanunesouza" identifier={url} title={post.frontmatter.title} url={url} />
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
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
