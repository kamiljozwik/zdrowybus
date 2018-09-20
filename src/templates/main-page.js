import React from 'react';
import PropTypes from 'prop-types';
import yt from '../img/youtube.svg';
import fb from '../img/facebook.svg';
import { graphql } from "gatsby"

export const MainPageTemplate = ({
    jumbotrone,
    intro,
    notes,
    ownerBox,
}) => (
    <section className="main component-wrapper">
        <div className="main__jumbo jumbo">
            <div className="jumbo__title">{jumbotrone.title}</div>
            <div className="jumbo__desc">{jumbotrone.description}</div>
            <div className="jumbo__links links">
                <a className="links__yt" href="https://www.youtube.com/channel/UCYkgb3qAj6vQ9bgF_Eitvdg"><img alt="YT logo" src={yt} /></a>
                <a className="links__fb" href="https://www.facebook.com/ZdrowyBuspl/"><img alt="FB logo" src={fb} /></a>
            </div>
        </div>
        <div className="main_body component_body">
            <section className="intro text-box">
                <div className="intro__title title">{intro.title}</div>
                <div className="intro__desc desc">{intro.description}</div>
            </section>
            <section className="notes text-box">
                <div className="notes__title title">{notes.title}</div>
                <div className="notes__desc desc">{notes.description}</div>
            </section>
            <section className="owner-box right-box">
                <div className="owner-box__img">
                    <img
                        src={ownerBox.avatar.image}
                        alt={ownerBox.avatar.image}
                    />
                </div>
                <div className="owner-box__title title">{ownerBox.title}</div>
                <div className="owner-box__desc desc">{ownerBox.description}</div>
            </section>
            <section className="youtube-video">
                <div className="youtube-video__wrapper">
                    <iframe
                        className="youtube-video__iframe"
                        src="https://www.youtube.com/embed/KUEZyt4L-ow?ecver=1"
                        frameBorder="0"
                        allowFullScreen="true"
                        title="ZdrowyBus"
                    />
                </div>
            </section>
        </div>
    </section>
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
    jumbotrone: PropTypes.object,
    intro: PropTypes.object,
    notes: PropTypes.object,
    ownerBox: PropTypes.object,
};

MainPage.propTypes = {
    data: PropTypes.object,
};

/* eslint-disable */
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
