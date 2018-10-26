import React from 'react';
import moment from 'moment';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const TripPageTemplate = trip => (
  <Layout path="/trips">
    <section className="trip component-wrapper">
      <div className="trip__jumbo jumbo" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(33,33,33,1) 100%), url(${trip.trip.frontmatter.graphic}-/resize/1920x1080/)` }}>
        <div className="jumbo__content-wrapper">
          <div className="title">{trip.trip.frontmatter.title}</div>
          <div className="place">{trip.trip.frontmatter.place}</div>
          <div className="date">{`${moment(trip.trip.date).format('DD/MM/YYYY')} - ${moment(trip.trip.endDate).format('DD/MM/YYYY')}`}</div>
          <div className="desc">{trip.trip.frontmatter.description}</div>
        </div>
      </div>
      <div className="trips__body component_body">
        <div className="trip-content cms-content" dangerouslySetInnerHTML={{ __html: trip.trip.html }} />
      </div>
    </section>
  </Layout>
);

const TripPage = ({ data }) => {
  const { markdownRemark: trip } = data;

  return (
    <TripPageTemplate trip={trip} />
  );
};

export default TripPage;

export const pageQuery = graphql`
  query NewTrip($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        graphic
        title
        date
        place
        description
      }
    }
  }
`;

