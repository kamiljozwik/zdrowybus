import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const TripsPageTemplate = ({ path }) => (
  <Layout path={path}>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Nasze wyprawy</div>
        <div className="blogEntry__second-line">coming soon...</div>
      </div>
    </section>
  </Layout>
);

const TripsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <TripsPageTemplate
      path={post.frontmatter.path}
    />
  );
};

export default TripsPage;

export const tripPageQuery = graphql`
  query TripPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        title
      }
    }
  }
`;
