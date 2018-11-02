import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Jumbo from '../components/jumbos/page';

export const TeamPageTemplate = ({ path, jumbotrone, html }) => (
  <Layout path={path}>
    <section className="team component-wrapper">
      <Jumbo page="team" title={jumbotrone.title} desc={jumbotrone.description} />
      <div className="team__body component_body">
        <div className="team-desc cms-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  </Layout>
);

const TeamPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <TeamPageTemplate
      path={post.frontmatter.path}
      jumbotrone={post.frontmatter.jumbotrone}
      html={post.html}
    />
  );
};

export default TeamPage;

TeamPageTemplate.propTypes = {
  jumbotrone: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  html: PropTypes.any.isRequired //eslint-disable-line
};

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
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
