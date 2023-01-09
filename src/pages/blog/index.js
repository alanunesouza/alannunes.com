import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import Search from '../../components/Search';

function Blog(props) {
  return (
    <Layout>
      <Search {...props} />
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
