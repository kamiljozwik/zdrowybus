import React from 'react';
import PropTypes from 'prop-types';
import busGraph from '../img/BusOfficial.jpg';
import infografika from '../img/Infografika.png';
import { graphql } from "gatsby"

export const ProjectPageTemplate = ({
    firstField,
    secondField,
}) => (
    <section className="project component-wrapper">
        <div className="project_body component_body">
            <section className="first-field text-box">
                <div className="first-field__title title">{firstField.title}</div>
                <div className="first-field__desc desc">{firstField.description}</div>
            </section>
            <section className="bus-graph">
                <img alt="bus graph" src={busGraph} />
            </section>
            <section className="second-field text-box">
                <div className="second-field__title title">{secondField.title}</div>
                <div className="second-field__desc desc">{secondField.description}</div>
            </section>
            <section className="right-graph right-box">
                <img alt="bus graph" src={infografika} />
            </section>
        </div>
    </section>
);

const ProjectPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <ProjectPageTemplate
            title={post.frontmatter.title}
            firstField={post.frontmatter.firstField}
            secondField={post.frontmatter.secondField}
        />
    );
};

export default ProjectPage;

ProjectPageTemplate.propTypes = {
    firstField: PropTypes.object,
    secondField: PropTypes.object,
};

ProjectPage.propTypes = {
    data: PropTypes.object,
};

/* eslint-disable */
export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        firstField {
            title
            description
        }
        secondField {
            title
            description
        }
      }
    }
  }
`;
