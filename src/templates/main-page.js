import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import nanoid from 'nanoid';
import { graphql, Link } from 'gatsby';
import Carousel from '../components/Carousel';
import Layout from '../components/layout';

export class MainPageTemplate extends Component {
  constructor(props) {
    super(props);
    this.jumbotrone = props.jumbotrone;
    this.ebook = props.ebook;
    this.html = props.html;
    this.gallery = props.gallery;
    this.newTrips = props.newTrips;
    this.description = props.description;
    this.path = props.path;
    this.purposes = React.createRef();
  }

  mapTrips = (trips) => {
    const mappedTrips = trips.map(trip => (
      <div key={nanoid()} className="trip-thumbnail main-trip__data">
        <div className="trip-thumbnail--text">
          <span className="trip-thumbnail--title">{trip.node.frontmatter.title}</span>
          <span className="trip-thumbnail--date">{`${moment(trip.node.frontmatter.date).format('DD/MM/YYYY')} - ${moment(trip.node.frontmatter.endDate).format('DD/MM/YYYY')}`}</span>
          <span className="trip-thumbnail--desc">{trip.node.frontmatter.description}</span>
          <Link className="trip-thumbnail--btn btn" to={trip.node.fields.slug} type="button">Zobacz więcej</Link>
        </div>
        <div className="trip-thumbnail--img">
          <span className="trip-thumbnail--place">{trip.node.frontmatter.place}</span>
          <div className="trip-image" style={{ backgroundImage: `url(${trip.node.frontmatter.graphic}-/resize/600x300/)` }} />
        </div>
      </div>
    ));
    return (
      <>
        <div className="main-trip--label left-label">Najbliższe wyjazdy</div>
        {mappedTrips}
      </>
    );
  }

  render() {
    return (
      <Layout path={this.path}>
        <section className="main component-wrapper">
          <div className="main__jumbo jumbo">
            <div className="jumbo__title">{this.jumbotrone.title}</div>
            <div className="jumbo__desc">{this.jumbotrone.description}</div>
            <a href="#mainID" className="jumbo__button btn">Zobacz więcej</a>
          </div>
          <div id="mainID" className="main__body component_body">
            <section className="main-desc">
              <h2 className="main-desc__label left-label">Wstęp</h2>
              <div className="main-desc__general">{this.description}</div>
              <div className="main-desc__img img1" />
              <div className="main-desc__img img2" />
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
                  <a className="main-ebook__button--download" href="https://www.zdrowybus.pl/pdf/planDzienny.pdf" download>POBIERZ</a>
                </div>
              </div>
            </section>
            <section className="main-gallery">
              <h2 className="main-gallery__label left-label">Galeria</h2>
              <Carousel images={this.gallery} />
            </section>
            <section className="main-partners">
              <div className="main-partners--label">Partnerzy</div>
              <div className="main-partners__partners" />
            </section>
            <section className="main-trip">
              {/* <div className="main-trip--label left-label">Najbliższe wyjazdy</div> */}
              {this.newTrips.length > 0 && this.mapTrips(this.newTrips)}
            </section>
            <section className="main-finished" />
          </div>
        </section>
      </Layout>
    );
  }
}

const MainPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { newTrips } = data;

  return (
    <MainPageTemplate
      path={post.frontmatter.path}
      title={post.frontmatter.title}
      jumbotrone={post.frontmatter.jumbotrone}
      ebook={post.frontmatter.ebook}
      description={post.frontmatter.description}
      html={post.html}
      gallery={post.frontmatter.gallery}
      newTrips={newTrips ? newTrips.edges : []}
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
  gallery: PropTypes.array.isRequired,
  newTrips: PropTypes.array.isRequired
};

MainPage.propTypes = {
  data: PropTypes.object.isRequired,
};
// "4a959880-fa53-5806-8fe1-d40f48bf2350"
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
        }
        description
        gallery
      }
      html
    }
    newTrips: allMarkdownRemark (
      limit: 3
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
