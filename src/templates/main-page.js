import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const MainPageTemplate = ({
  jumbotrone,
  html
}) => (
  <Layout>
    <section className="main component-wrapper">
      <div className="main__jumbo jumbo">
        <div className="jumbo__title">{jumbotrone.title}</div>
        <div className="jumbo__desc">{jumbotrone.description}</div>
      </div>
      <div className="main__body component_body">
        <section className="purposes cms_content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  </Layout>
);

const MainPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <MainPageTemplate
      title={post.frontmatter.title}
      jumbotrone={post.frontmatter.jumbotrone}
      html={post.html}
    />
  );
};

export default MainPage;

MainPageTemplate.propTypes = {
  jumbotrone: PropTypes.object.isRequired
};

MainPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const mainPageQuery = graphql`
  query MainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        jumbotrone {
            title
            description
        }
      }
      html
    }
  }
`;
