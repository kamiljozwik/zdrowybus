import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const BlogEntryPageTemplate = ({ path }) => (
  <Layout path={path}>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Zdrowy blog</div>
        <div className="blogEntry__second-line">coming soon...</div>
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
