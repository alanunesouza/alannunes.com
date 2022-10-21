import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import * as styles from './styles';
import BlogItem from '../../components/BlogItem';

function Blog({ data }) {
  const { posts: postsData } = data.blog;

  return (
    <Layout>
      <styles.Container>
        {postsData.map((post) => (
          <BlogItem
            key={post.id}
            title={post.frontmatter.title}
            author={post.frontmatter.author}
            date={post.frontmatter.date}
            timeToRead={post.timeToRead}
            route={post.fields.slug}
            resume={post.excerpt}
          />
        ))}
      </styles.Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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

Blog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.objectOf(PropTypes.any),
};

Blog.defaultProps = {
  data: {},
};

export default Blog;
