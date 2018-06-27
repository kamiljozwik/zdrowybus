import React from 'react';
import PropTypes from 'prop-types';
import yt from '../img/youtube.svg';
import fb from '../img/facebook.svg';

export const BlogPageTemplate = ({
    firstField,
    secondField,
}) => (
    <section className="contact component-wrapper">
        <div className="contact_body component_body">
            <section className="first-field text-box">
                <div className="first-field__title title">{firstField.title}</div>
                <div className="first-field__desc desc">{firstField.description}</div>
            </section>
            <section className="links">
                <div className="contact_links">
                    <a className="links__yt" href="http://www.youtube.pl"><img alt="YT logo" src={yt} /></a>
                    <a className="links__fb" href="http://www.facebook.pl"><img alt="FB logo" src={fb} /></a>        
                </div>
            </section>
            <section className="second-field text-box">
                <div className="second-field__title title">{secondField.title}</div>
                <div className="second-field__desc desc">{secondField.description}</div>
            </section>
        </div>
    </section>
);

const BlogPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <BlogPageTemplate
            title={post.frontmatter.title}
            firstField={post.frontmatter.firstField}
            secondField={post.frontmatter.secondField}
        />
    );
};

export default BlogPage;

BlogPageTemplate.propTypes = {
    firstField: PropTypes.object,
    secondField: PropTypes.object,
};

BlogPage.propTypes = {
    data: PropTypes.object,
};

/* eslint-disable */
export const blogPageQuery = graphql`
  query BlogPage($id: String!) {
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
