import React from 'react';
import moment from 'moment';
import { graphql, withPrefix } from 'gatsby';
import Layout from '../components/layout';

export const TripPageTemplate = trip => (
  <Layout path="/trips">
    <section className="trip component-wrapper">
      <div className="trip__jumbo jumbo" style={{ background: `url(${withPrefix(trip.trip.frontmatter.graphic)}) no-repeat` }}>
        <div className="jumbo__title">{trip.trip.frontmatter.title}</div>
        <div className="jumbo__date">{moment(trip.trip.date).format('DD-MM-YYYY')}</div>
        <div className="jumbo__place">{trip.trip.place}</div>
        <div className="jumbo__desc">{trip.trip.description}</div>
      </div>
      <div className="trip-content cms-content" dangerouslySetInnerHTML={{ __html: trip.trip.html }} />
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

