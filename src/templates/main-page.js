import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import yt from '../img/youtube.svg';
import fb from '../img/facebook.svg';
import Layout from '../components/layout';

export const MainPageTemplate = ({
  jumbotrone,
  intro,
  notes,
  ownerBox,
}) => (
  <Layout>
    <section className="main component-wrapper">
      <div className="main__jumbo jumbo">
        <div className="jumbo__title">{jumbotrone.title}</div>
        <div className="jumbo__desc">{jumbotrone.description}</div>
      </div>
      <div className="main_body component_body">
        <section className="intro">
          <div className="intro__title title">{intro.title}</div>
          <div className="intro__desc desc">{intro.description}</div>
        </section>
        <section className="notes">
          <div className="notes__title title">{notes.title}</div>
          <div className="notes__desc desc">{notes.description}</div>
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
      intro={post.frontmatter.intro}
      notes={post.frontmatter.notes}
      ownerBox={post.frontmatter.ownerBox}
    />
  );
};

export default MainPage;

MainPageTemplate.propTypes = {
  jumbotrone: PropTypes.object.isRequired,
  intro: PropTypes.object.isRequired,
  notes: PropTypes.object.isRequired,
  ownerBox: PropTypes.object.isRequired,
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
        intro {
            title
            description
        }
        notes {
            title
            description
        }
        ownerBox {
            title
            description
            avatar {
                image
                alt
            }
        }
      }
    }
  }
`;
