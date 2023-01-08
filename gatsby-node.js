const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` });

    createNodeField({
      node,
      name: `slug`,
      value: `blog/${slug.slice(1)}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: `/`,
    toPath: `/blog`,
  });

  return graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
              title
              tags
            }
            timeToRead
            id
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) throw result.errors;

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/BlogPost/index.js`),
        context: {
          slug: node.fields.slug,
          previous: next,
          next: previous,
        },
      });
    });

    // const postsPerPage = 10;
    // const numPages = Math.ceil(posts.length / postsPerPage);

    // Array.from({ length: numPages }).forEach((_, i) => {
    //   createPage({
    //     path: i === 0 ? `/blog/` : `/blog/page/${i + 1}`,
    //     component: path.resolve('./src/templates/BlogPost/index.js'),
    //     context: {
    //       slug: '/teste',
    //       limit: postsPerPage,
    //       skip: i * postsPerPage,
    //       numPages,
    //       currentPage: i + 1,
    //     },
    //   });
    // });
  });
};
