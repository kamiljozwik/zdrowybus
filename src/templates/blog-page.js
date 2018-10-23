import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

export const BlogEntryPageTemplate = ({ path }) => (
  <Layout path={path}>
    <section className="blog component-wrapper">
      <div className="blog__body component_body">
        <div className="blog__first-line">Zdrowy blog</div>
        <Link to="/blog">Przejdź na BLOG</Link>
      </div>
    </section>
  </Layout>
);

const BlogEntryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogEntryPageTemplate
      path={post.frontmatter.path}
    />
  );
};

export default BlogEntryPage;

export const blogPageQuery = graphql`
  query BlogPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        title
      }
    }
  }
`;
