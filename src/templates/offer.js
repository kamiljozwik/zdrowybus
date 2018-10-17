import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const OfferPageTemplate = ({ path }) => (
  <Layout path={path}>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Współpraca</div>
        <div className="blogEntry__second-line">coming soon...</div>
      </div>
    </section>
  </Layout>
);

const OfferPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <OfferPageTemplate
      path={post.frontmatter.path}
    />
  );
};

export default OfferPage;

export const offerPageQuery = graphql`
  query OfferPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        title
      }
    }
  }
`;
