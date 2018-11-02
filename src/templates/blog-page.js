import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Jumbo from '../components/jumbos/page';

export const BlogEntryPageTemplate = ({ path }) => (
  <Layout path={path}>
    <section className="blog-page component-wrapper">
      <Jumbo page="blog-page" title="ZdrowyBus blog" desc="">
        <Link className="jumbo__button btn" to="/blog">Przejdź na naszego bloga</Link>
      </Jumbo>
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
