const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            tags
            path
            templateKey
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges

      posts
        .forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            tags: node.frontmatter.tags,
            component: path.resolve(
              `src/templates/${String(node.frontmatter.templateKey)}.js`
            ),
            context: {} // additional data can be passed via context
          });
        });
    });
}