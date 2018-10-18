import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const noNewTrips = {
  node: {
    frontmatter: {
      title: 'Brak nowych wyjazdów',
      date: ''
    }
  }
};

const renderTrips = tripsArray => tripsArray.map(trip => (
    <>
      <div>{trip.node.frontmatter.title}</div>
      <div>{trip.node.frontmatter.date}</div>
      <div>{trip.node.frontmatter.place}</div>
      <div><Link to={trip.node.fields.slug}>Zobacz więcej</Link></div>
    </>
));

export const TripsPageTemplate = ({ path, newTrips }) => (
  <Layout path={path}>
    <section className="blogEntry component-wrapper">
      <div className="trips__jumbo jumbo">
        <div className="jumbo__title">Najbliższy wyjazd</div>
        <div className="jumbo__title">{newTrips[0].node.frontmatter.title}</div>
        <div className="jumbo__desc">{newTrips[0].node.frontmatter.date}</div>
        <div className="jumbo__desc">{newTrips[0].node.frontmatter.place}</div>
        <div className="jumbo__desc"><Link to={newTrips[0].node.fields.slug}>Zobacz więcej</Link></div>
      </div>
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Pozostałe wyjazdy</div>
        {renderTrips(newTrips)}
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
      newTrips={newTrips ? newTrips.edges : [noNewTrips]}
    />
  );
};

TripsPageTemplate.propTypes = {
  path: PropTypes.string.isRequired,
  newTrips: PropTypes.array.isRequired
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
        fields {
          slug
        }
        frontmatter{
          title
          date(formatString: "DD.MM.YYYY")
          place
        }
      }
    }
  }
}
`;

