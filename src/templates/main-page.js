import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const MainPageTemplate = ({
  jumbotrone,
  html,
  description
}) => (
  <Layout>
    <section className="main component-wrapper">
      <div className="main__jumbo jumbo">
        <div className="jumbo__title">{jumbotrone.title}</div>
        <div className="jumbo__desc">{jumbotrone.description}</div>
      </div>
      <div className="main__body component_body">
        <section className="main-desc">
          <div className="main-desc__general">{description}</div>
          <div className="main-desc__purposes cms_content" dangerouslySetInnerHTML={{ __html: html }} />
        </section>
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
      description={post.frontmatter.description}
      html={post.html}
    />
  );
};

export default MainPage;

MainPageTemplate.propTypes = {
  jumbotrone: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  html: PropTypes.any.isRequired //eslint-disable-line
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
        description
      }
      html
    }
  }
`;
