const { siteMetadata } = require('./config/metadata');

require('dotenv').config();

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#6373ff`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID || 'none',
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alan Nunes`,
        short_name: `Alan Nunes`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6373ff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    // `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `alannunes`,
      },
    },
  ],
};
