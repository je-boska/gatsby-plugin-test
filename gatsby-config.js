module.exports = {
  siteMetadata: {
    title: `plugin-test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'test-pkg',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content`,
        ignore: ['**/.*'],
      },
    },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
