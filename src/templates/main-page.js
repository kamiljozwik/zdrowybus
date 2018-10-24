import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { graphql, Link, withPrefix } from 'gatsby';
import Layout from '../components/layout';

export class MainPageTemplate extends Component {
  constructor(props) {
    super(props);
    this.jumbotrone = props.jumbotrone;
    this.ebook = props.ebook;
    this.html = props.html;
    this.newTrip = props.newTrip;
    this.newTrip2 = props.newTrip2;
    this.description = props.description;
    this.path = props.path;
    this.purposes = React.createRef();
  }

  render() {
    return (
      <Layout path={this.path}>
        <section id="mainID" className="main component-wrapper">
          <div className="main__jumbo jumbo">
            <div className="jumbo__title">{this.jumbotrone.title}</div>
            <div className="jumbo__desc">{this.jumbotrone.description}</div>
            <button type="button" className="jumbo__button btn">Zobacz więcej</button>
          </div>
          <div className="main__body component_body">
            <section className="main-desc">
              <h2 className="main-desc__label">Wstęp</h2>
              <div className="main-desc__general">{this.description}</div>
              <img className="main-desc__img img1" src="https://via.placeholder.com/500x450" alt="genral" />
              <img className="main-desc__img img2" src="https://via.placeholder.com/500x350" alt="genral2" />
              <div ref={this.purposes} className="main-desc__purposes cms-content" dangerouslySetInnerHTML={{ __html: this.html }} />
            </section>
            <section className="main-ebook">
              <div className="main-ebook__inner">
                <div className="main-ebook__text">
                  <span className="main-ebook__text--label">Pobierz darmowy ebook</span>
                  <span className="main-ebook__text--title">{this.ebook.title}</span>
                  <span className="main-ebook__text--desc">{this.ebook.description}</span>
                </div>
                <div className="main-ebook__button">
                  <a className="main-ebook__button--download" href={this.ebook.file} download>POBIERZ</a>
                </div>
              </div>
            </section>
            <section className="main-gallery" />
            <section className="main-partners">
              <div className="main-partners--label">Partnerzy</div>
              <div className="main-partners__partners" />
            </section>
            <section className="main-trip">
              {/* toDo: map() */}
              <div className="main-trip--label">Najbliższe wyjazdy</div>
              <div className="main-trip__data">
                <div className="main-trip__data--text">
                  <span className="main-trip__data--title">{this.newTrip.frontmatter.title}</span>
                  <span className="main-trip__data--date">{`${moment(this.newTrip.frontmatter.date).format('DD/MM/YYYY')} - ${moment(this.newTrip.frontmatter.endDate).format('DD/MM/YYYY')}`}</span>
                  <span className="main-trip__data--desc">{this.newTrip.frontmatter.description}</span>
                  <Link className="main-trip__data--btn btn" to={this.newTrip.fields.slug} type="button">Zobacz więcej</Link>
                </div>
                <div className="main-trip__data--img">
                  <span className="main-trip__data--place">{this.newTrip.frontmatter.place}</span>
                  <div className="trip-image" style={{ backgroundImage: `url(${withPrefix(this.newTrip.frontmatter.graphic)})` }} />
                </div>
              </div>
              <div className="trips-divider" />
              <div className="main-trip__data">
                <div className="main-trip__data--text">
                  <span className="main-trip__data--title">{this.newTrip2.frontmatter.title}</span>
                  <span className="main-trip__data--date">{`${moment(this.newTrip2.frontmatter.date).format('DD/MM/YYYY')} - ${moment(this.newTrip2.frontmatter.endDate).format('DD/MM/YYYY')}`}</span>
                  <span className="main-trip__data--desc">{this.newTrip2.frontmatter.description}</span>
                  <Link className="main-trip__data--btn btn" to={this.newTrip2.fields.slug} type="button">Zobacz więcej</Link>
                </div>
                <div className="main-trip__data--img">
                  <span className="main-trip__data--place">{this.newTrip2.frontmatter.place}</span>
                  <div className="trip-image" style={{ backgroundImage: `url(${withPrefix(this.newTrip2.frontmatter.graphic)})` }} />
                </div>
              </div>
            </section>
          </div>
        </section>
      </Layout>
    );
  }
}

const MainPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { newTrip } = data;

  return (
    <MainPageTemplate
      path={post.frontmatter.path}
      title={post.frontmatter.title}
      jumbotrone={post.frontmatter.jumbotrone}
      ebook={post.frontmatter.ebook}
      description={post.frontmatter.description}
      html={post.html}
      newTrip={newTrip.edges[0].node}
      newTrip2={newTrip.edges[1].node}
    />
  );
};

export default MainPage;

MainPageTemplate.propTypes = {
  jumbotrone: PropTypes.object.isRequired,
  ebook: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  html: PropTypes.any.isRequired, //eslint-disable-line
  newTrip: PropTypes.object.isRequired,
  newTrip2: PropTypes.object.isRequired
};

MainPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const mainPageQuery = graphql`
  query MainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        title
        jumbotrone {
            title
            description
        }
        ebook {
          title
          description
          file
        }
        description
      }
      html
    }
    newTrip: allMarkdownRemark (
      limit: 2
      filter: {
        frontmatter: {
          type: {eq: "new-trip"}
        }  
      }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter{
            graphic
            title
            date
            place
            description
            type
          }
        }
      }
    }
  }
`;
