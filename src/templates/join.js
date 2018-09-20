import React from 'react';
import PropTypes from 'prop-types';
import busGraph from '../img/friends2.jpg';
import { graphql } from "gatsby"

export const JoinPageTemplate = ({
    firstField,
    secondField,
}) => (
    <section className="join component-wrapper">
        <div className="join_body component_body">
            <section className="first-field text-box">
                <div className="first-field__title title">{firstField.title}</div>
                <div className="first-field__desc desc">{firstField.description}</div>
            </section>
            <section className="friends-graph">
                <img alt="friends graph" src={busGraph} />
            </section>
            <section className="second-field text-box">
                <div className="second-field__title title">{secondField.title}</div>
                <div className="second-field__desc desc">{secondField.description}</div>
            </section>
        </div>
    </section>
);

const JoinPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <JoinPageTemplate
            title={post.frontmatter.title}
            firstField={post.frontmatter.firstField}
            secondField={post.frontmatter.secondField}
        />
    );
};

export default JoinPage;

JoinPageTemplate.propTypes = {
    firstField: PropTypes.object,
    secondField: PropTypes.object,
};

JoinPage.propTypes = {
    data: PropTypes.object,
};

/* eslint-disable */
export const joinPageQuery = graphql`
  query JoinPage($id: String!) {
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
