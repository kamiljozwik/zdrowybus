import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import moment from 'moment';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const _ = require('lodash');

const renderTrips = tripsArray => tripsArray.map(trip => (
  <div className="single-trip" key={nanoid()}>
    <div>{trip.title}</div>
    <div>{moment(trip.date).format('DD-MM-YYYY')}</div>
    <div>{trip.place}</div>
    <div><Link to={trip.slug}>Zobacz więcej</Link></div>
  </div>
));

export const TripsPageTemplate = ({ path, newTrips }) => (
  newTrips.lenght > 0
    ? (
      <Layout path={path}>
        <section className="blogEntry component-wrapper">
          <div className="trips__jumbo jumbo">
            <div className="jumbo__title">Najbliższy wyjazd</div>
            <div className="jumbo__title">{newTrips[0].title}</div>
            <div className="jumbo__desc">{moment(newTrips[0].date).format('DD-MM-YYYY')}</div>
            <div className="jumbo__desc">{newTrips[0].place}</div>
            <div className="jumbo__desc"><Link to={newTrips[0].slug}>Zobacz więcej</Link></div>
          </div>
          <div className="blogEntry_body component_body">
            <div className="blogEntry__first-line">Pozostałe wyjazdy</div>
            {renderTrips(newTrips)}
          </div>
        </section>
      </Layout>
    )
    : (
      <Layout path={path}>
        <section className="blogEntry component-wrapper">
          <div className="trips__jumbo jumbo no-trips">
            <div className="jumbo__title">Brak wyjazdów</div>
            <div className="jumbo__desc">Zapraszamy wkrótce</div>
          </div>
        </section>
      </Layout>
    )
);

const TripsPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { allMarkdownRemark: newTrips } = data;

  // format trips data
  const tripsData = newTrips ? newTrips.edges.map((trip) => {
    const tripData = {
      title: trip.node.frontmatter.title,
      date: trip.node.frontmatter.date,
      place: trip.node.frontmatter.place,
      slug: trip.node.fields.slug
    };
    return tripData;
  }) : [];

  return (
    <TripsPageTemplate
      path={post.frontmatter.path}
      newTrips={_.sortBy(tripsData, ['date'])}
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
          date
          tags
        }
      }
    }
  }
}
`;

