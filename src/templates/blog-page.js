import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

export const BlogEntryPageTemplate = ({ path }) => (
  <Layout path={path}>
    <section className="blog-page component-wrapper">
      <div className="blog-page__jumbo jumbo">
        <div className="jumbo__title">ZdrowyBus blog</div>
        <Link className="jumbo__desc btn" to="/blog">Przejdź na naszego bloga</Link>
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
