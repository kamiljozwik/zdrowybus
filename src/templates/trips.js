import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import moment from 'moment';
import { Link, graphql, withPrefix } from 'gatsby';
import Layout from '../components/layout';

const _ = require('lodash');

const renderTrips = tripsArray => tripsArray.map(trip => (
  <div className="single-trip single-trip__wrapper" key={nanoid()}>
    <div className="single-trip__data data">
      <div className="data--title">{trip.title}</div>
      <div className="data--date">{moment(trip.date).format('DD-MM-YYYY')}</div>
      <div className="data--place">{trip.place}</div>
      <div className="data--desc">{trip.description}</div>
      <div className="data--button"><Link to={trip.slug}>Zobacz więcej</Link></div>
    </div>
    <div className="data--image" style={{ backgroundImage: `url(${withPrefix(trip.graphic)})` }} />
  </div>
));

export const TripsPageTemplate = ({ path, newTrips, finishedTrips }) => (
  !(_.isEmpty(newTrips))
    ? (
      <Layout path={path}>
        <section className="trips component-wrapper">
          <div className="trips__jumbo jumbo" style={{ backgroundImage: `url(${withPrefix(newTrips[0].graphic)})` }}>
            <div className="jumbo__label">Najbliższy wyjazd</div>
            <div className="jumbo__title">{newTrips[0].title}</div>
            <div className="jumbo__date">{moment(newTrips[0].date).format('DD-MM-YYYY')}</div>
            <div className="jumbo__place">{newTrips[0].place}</div>
            <div className="jumbo__desc">{newTrips[0].description}</div>
            <div className="jumbo__button"><Link to={newTrips[0].slug}>Zobacz więcej</Link></div>
          </div>
          <div className="trips__body component_body">
            <div>
              <div className="trips__new-trips">
                <div className="trips__new-trips--label">Nadchodzące wyjazdy</div>
                {renderTrips(newTrips)}
              </div>
            </div>
            <div>
              <div className="trips__finished-trips">
                <div className="trips__finished-trips--label">Zakończone wyjazdy</div>
                {renderTrips(finishedTrips)}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
    : (
      <Layout path={path}>
        <section className="trips component-wrapper">
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
  const { newTrips } = data;
  const { finishedTrips } = data;

  const tripsDataFormatter = (trips) => {
    const formatedTrips = trips.edges.map((trip) => {
      const tripData = {
        graphic: trip.node.frontmatter.graphic,
        title: trip.node.frontmatter.title,
        date: trip.node.frontmatter.date,
        place: trip.node.frontmatter.place,
        description: trip.node.frontmatter.description,
        slug: trip.node.fields.slug
      };
      return tripData;
    });
    return formatedTrips;
  };

  const newTripsData = tripsDataFormatter(newTrips);
  const finishedTripsData = tripsDataFormatter(finishedTrips);

  return (
    <TripsPageTemplate
      path={post.frontmatter.path}
      newTrips={_.sortBy(newTripsData, ['date'])}
      finishedTrips={_.sortBy(finishedTripsData, ['date'])}
    />
  );
};

TripsPageTemplate.propTypes = {
  path: PropTypes.string.isRequired,
  newTrips: PropTypes.array.isRequired,
  finishedTrips: PropTypes.array.isRequired,
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
  newTrips: allMarkdownRemark (
    filter: {
      frontmatter: {
        type: {eq: "new-trip"}
      }
    }
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter{
          graphic
          title
          date
          place
          description
          type
        }
      }
    }
  }
  finishedTrips: allMarkdownRemark (
    filter: {
      frontmatter: {
        type: {eq: "finished-trip"}
      }
    }
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter{
          graphic
          title
          date
          place
          description
          type
        }
      }
    }
  }
}
`;

