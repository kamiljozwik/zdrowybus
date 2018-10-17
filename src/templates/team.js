import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const TeamPageTemplate = ({ path }) => (
  <Layout path={path}>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Zespół</div>
        <div className="blogEntry__second-line">coming soon...</div>
      </div>
    </section>
  </Layout>
);

const TeamPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <TeamPageTemplate
      path={post.frontmatter.path}
    />
  );
};

export default TeamPage;

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        title
      }
    }
  }
`;
