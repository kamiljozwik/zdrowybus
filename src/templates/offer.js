import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Jumbo from '../components/jumbos/page';

export const OfferPageTemplate = ({ path, jumbotrone, html }) => (
  <Layout path={path}>
    <section className="offer component-wrapper">
      <Jumbo page="offer" title={jumbotrone.title} desc={jumbotrone.description} />
      <div className="offer__body component_body">
        <div className="offer-desc cms-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  </Layout>
);

const OfferPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <OfferPageTemplate
      path={post.frontmatter.path}
      jumbotrone={post.frontmatter.jumbotrone}
      html={post.html}
    />
  );
};

export default OfferPage;

OfferPageTemplate.propTypes = {
  jumbotrone: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  html: PropTypes.any.isRequired //eslint-disable-line
};

export const offerPageQuery = graphql`
  query OfferPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        title
        jumbotrone {
          title
          description
        }
      }
    }
  }
`;
