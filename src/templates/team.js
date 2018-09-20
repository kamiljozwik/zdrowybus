import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from "gatsby"

export const TeamPageTemplate = ({
    firstField,
    person1,
}) => (
    <section className="team component-wrapper">
        <div className="team_body component_body">
            <section className="first-field">
                <div className="first-field__title title">{firstField.title}</div>
                <div className="first-field__desc desc">{firstField.description}</div>
            </section>
            <section className="team-member">
                <div className="team-member__img">
                    <img
                        src={person1.avatar.image}
                        alt={person1.avatar.image}
                    />
                </div>
                <div className="team-member__data">
                    <div className="team-member__name title">{person1.name}</div>
                    <div className="team-member__desc desc">{person1.description}</div>
                </div>
            </section>
        </div>
    </section>
);

const TeamPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <TeamPageTemplate
            firstField={post.frontmatter.firstField}
            person1={post.frontmatter.person1}
        />
    );
};

export default TeamPage;

TeamPageTemplate.propTypes = {
    firstField: PropTypes.object,
    person1: PropTypes.object,
};

TeamPage.propTypes = {
    data: PropTypes.object,
};

/* eslint-disable */
export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        firstField {
            title
            description
        }
        person1 {
            name
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
