import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const ContactPageTemplate = ({ path }) => (
  <Layout path={path}>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Kontakt</div>
        <div className="blogEntry__second-line">zdrowybus@gmail.com</div>
      </div>
    </section>
  </Layout>
);

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      path={post.frontmatter.path}
    />
  );
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        title
      }
    }
  }
`;
