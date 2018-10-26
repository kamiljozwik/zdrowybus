import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import moment from 'moment';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const _ = require('lodash');

const renderTrips = tripsArray => tripsArray.map(trip => (
  <div className="trip-thumbnail" key={nanoid()}>
    <div className="trip-thumbnail--text">
      <span className="trip-thumbnail--title">{trip.title}</span>
      <span className="trip-thumbnail--date">{`${moment(trip.date).format('DD/MM/YYYY')} - ${moment(trip.endDate).format('DD/MM/YYYY')}`}</span>
      <span className="trip-thumbnail--desc">{trip.description}</span>
      <span className="trip-thumbnail--btn btn"><Link to={trip.slug}>Zobacz więcej</Link></span>
    </div>
    <div className="trip-thumbnail--img">
      <span className="trip-thumbnail--place">{trip.place}</span>
      <div className="trip-image" style={{ backgroundImage: `url(${trip.graphic}-/resize/600x300/)` }} />
    </div>
  </div>
));

export const TripsPageTemplate = ({ path, newTrips, finishedTrips }) => (
  !(_.isEmpty(newTrips))
    ? (
      <Layout path={path}>
        <section className="trips component-wrapper">
          <div className="trips__jumbo jumbo" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(33,33,33,1) 100%), url(${newTrips[0].graphic}-/resize/1920x1080/)` }}>
            <div className="jumbo__content-wrapper">
              <div className="label">Najbliższy wyjazd</div>
              <div className="title">{newTrips[0].title}</div>
              <div className="place">{newTrips[0].place}</div>
              <div className="date">{`${moment(newTrips[0].date).format('DD/MM/YYYY')} - ${moment(newTrips[0].endDate).format('DD/MM/YYYY')}`}</div>
              <div className="desc">{newTrips[0].description}</div>
              <div className="button btn"><Link to={newTrips[0].slug}>Zobacz więcej</Link></div>
            </div>
          </div>
          <div className="trips__body component_body">
            <div className="trips__new-trips">
              <div className="trips__new-trips--label left-label">Nadchodzące wyjazdy</div>
              {renderTrips(newTrips)}
            </div>
            <div className="trips__finished-trips">
              <div className="trips__finished-trips--label left-label">Zakończone wyjazdy</div>
              {renderTrips(finishedTrips)}
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
          {
            !(_.isEmpty(finishedTrips)) ? (
              <div className="trips__body component_body">
                <div className="trips__finished-trips">
                  <div className="trips__finished-trips--label left-label">Zakończone wyjazdy</div>
                  {renderTrips(finishedTrips)}
                </div>
              </div>
            ) : <span />
          }
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

  const newTripsData = newTrips ? tripsDataFormatter(newTrips) : [];
  const finishedTripsData = finishedTrips ? tripsDataFormatter(finishedTrips) : [];

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

