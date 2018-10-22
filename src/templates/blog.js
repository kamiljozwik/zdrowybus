import React from 'react';
import { graphql, Link } from 'gatsby';
import nanoid from 'nanoid';
import LayoutBlog from '../components/layout-blog';

const renderNewPosts = newPosts => newPosts.map(post => (
  <div className="new-post" key={nanoid()}>
    <div>{post.node.frontmatter.title}</div>
    <div>{post.node.frontmatter.description}</div>
    <Link to={post.node.fields.slug}>Więcej</Link>
  </div>
));

export const BlogEntryPageTemplate = ({ path, newPosts, tripsPosts }) => (
  <LayoutBlog path={path}>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Zdrowy blog</div>
        <div className="blogEntry__second-line">Najnowsze posty</div>
        {renderNewPosts(tripsPosts)}
      </div>
    </section>
  </LayoutBlog>
);

const BlogEntryPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const { allMarkdownRemark: newPosts } = data;
  const { tripsPosts } = data;

  return (
    <BlogEntryPageTemplate
      path={page.frontmatter.path}
      newPosts={newPosts.edges} // Array
      tripsPosts={tripsPosts.edges}
    />
  );
};

export default BlogEntryPage;

export const blogPageQuery = graphql`
  query Blog($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        title
      }
    }
    allMarkdownRemark(
      limit: 50
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { in: "blog-post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
    tripsPosts: allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "blog-trips" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
