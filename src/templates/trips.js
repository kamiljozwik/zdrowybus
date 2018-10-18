import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const TripsPageTemplate = ({ path, newTrips }) => (
  <Layout path={path}>
    <section className="blogEntry component-wrapper">
      <div className="trips__jumbo jumbo">
        <div className="jumbo__title">Najbliższy wyjazd</div>
        <div className="jumbo__title">{newTrips[0].node.frontmatter.title}</div>
        <div className="jumbo__desc">{newTrips[0].node.frontmatter.date}</div>
      </div>
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Pozostałe wyjazdy</div>
        <div className="blogEntry__second-line">{newTrips[0].node.frontmatter.title}</div>
        <div className="blogEntry__second-line">{newTrips[0].node.frontmatter.date}</div>
      </div>
    </section>
  </Layout>
);

const TripsPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { allMarkdownRemark: newTrips } = data;

  return (
    <TripsPageTemplate
      path={post.frontmatter.path}
      newTrips={newTrips ? newTrips.edges : []}
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
  allMarkdownRemark (
    filter: {
      frontmatter: {
        tags: {in: "newTrip"}
      }
    }
  ) {
    edges {
      node {
        frontmatter{
          title
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
}
`;

