import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { TripJumbo } from '../components/jumbos/page';

export const TripPageTemplate = trip => (
  <Layout path="/trips">
    <section className="trip component-wrapper">
      <TripJumbo
        type="trip"
        title={trip.trip.frontmatter.title}
        place={trip.trip.frontmatter.place}
        date={trip.trip.frontmatter.date}
        endDate={trip.trip.frontmatter.endDate}
        desc={trip.trip.frontmatter.description}
        graphic={trip.trip.frontmatter.graphic}
        slug=""
        isTripsList={false}
      />
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

