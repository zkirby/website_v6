exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const Markdown = require.resolve(`./src/components/Markdown.jsx`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              section
              subsection
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: Markdown,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          section: node.frontmatter.section,
          subsection: node.frontmatter.subsection,
        },
      });
    });
  });
};
