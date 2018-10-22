import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const ContactPageTemplate = ({ path, emailBus, emailArek }) => (
  <Layout path={path}>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Kontakt</div>
        <div className="blogEntry__second-line">{emailBus}</div>
        <div className="blogEntry__second-line">{emailArek}</div>
      </div>
    </section>
  </Layout>
);

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      path={post.frontmatter.path}
      emailBus={post.frontmatter.emailBus}
      emailArek={post.frontmatter.emailArek}
    />
  );
};

export default ContactPage;

ContactPageTemplate.propTypes = {
  path: PropTypes.string.isRequired,
  emailBus: PropTypes.string.isRequired,
  emailArek: PropTypes.string.isRequired
};

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        title
        emailBus
        emailArek
      }
    }
  }
`;
