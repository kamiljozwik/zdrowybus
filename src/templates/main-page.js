import React from 'react';
import PropTypes from 'prop-types';

export const MainPageTemplate = ({
    jumbotrone,
    intro,
    notes,
    ownerBox,
}) => {

    return (
        <div>
            <section>
                <div>{jumbotrone.title}</div>
                <div>{jumbotrone.description}</div>
            </section>
            <section>
                <div>{intro.title}</div>
                <div>{intro.description}</div>
            </section>
            <section>
                <div>{notes.title}</div>
                <div>{notes.description}</div>
            </section>
            <section>
                <img
                    style={{ borderRadius: '50%', width: '100px' }}
                    src={ownerBox.avatar.image}
                    alt={ownerBox.avatar.image}
                />
                <div>{ownerBox.title}</div>
                <div>{ownerBox.description}</div>
            </section>
        </div>
    );
}

const MainPage = ({ data }) => {
    const {markdownRemark: post} = data;

    return (
        <MainPageTemplate
            title={post.frontmatter.title}
            jumbotrone={post.frontmatter.Jumbotrone}
            intro={post.frontmatter.Intro}
            notes={post.frontmatter.Notes}
            ownerBox={post.frontmatter.OwnerBox}
        />    
    )
}

export default MainPage

export const mainPageQuery = graphql`
  query MainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        Jumbotrone {
            title
            description
        }
        Intro {
            title
            description
        }
        Notes {
            title
            description
        }
        OwnerBox {
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
`
