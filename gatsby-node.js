const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/fruits.js');

  return graphql(`
    query loadPagesQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//(pages)/" } }) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            html
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      });
    });
  });
};
