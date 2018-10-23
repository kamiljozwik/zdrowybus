import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax } from 'gsap/TweenMax';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import placeholder from '../img/placeholder.jpg';

export class MainPageTemplate extends Component {
  constructor(props) {
    super(props);
    this.jumbotrone = props.jumbotrone;
    this.html = props.html;
    this.description = props.description;
    this.path = props.path;
    this.purposes = React.createRef();
  }

  componentDidMount() {
    TweenMax.to(this.purposes.current, 0, { height: 0 });
  }

  togglePurposes = (event) => {
    const desc = this.purposes.current;
    if (desc.classList.contains('show')) {
      TweenMax.to(desc, 0.1, { height: 0 });
      desc.classList.remove('show');
    } else {
      TweenMax.to(desc, 0.1, { height: 900 });
      desc.classList.add('show');
    }
    const button = event.target.innerHTML;
    button === 'Zobacz więcej' ? event.target.innerHTML = 'Ukryj' : event.target.innerHTML = 'Zobacz więcej'; // eslint-disable-line
  }

  render() {
    return (
      <Layout path={this.path}>
        <section className="main component-wrapper">
          <div className="main__jumbo jumbo">
            <div className="jumbo__title">{this.jumbotrone.title}</div>
            <div className="jumbo__desc">{this.jumbotrone.description}</div>
            <button type="button" className="jumbo__button btn">Zobacz więcej</button>
          </div>
          <div className="main__body component_body">
            <section className="main-desc">
              <h2 className="main-desc__label">Wstęp</h2>
              <div className="main-desc__general">{this.description}</div>
              <div ref={this.purposes} className="main-desc__purposes cms-content" dangerouslySetInnerHTML={{ __html: this.html }} />
              <button type="button" className="btn main-desc__purposes--toggle" onClick={this.togglePurposes}>Zobacz więcej</button>
            </section>
            <section className="main-ebook">
              <div className="main-ebook__inner">
                <div className="main-ebook__text">
                  <span className="main-ebook__text--label">Pobierz darmowy ebook</span>
                  <span className="main-ebook__text--title">Tytuł ebooka</span>
                  <span className="main-ebook__text--desc">opis ebooka</span>
                </div>
                <div className="main-ebook__button">
                  <button type="button">POBIERZ</button>
                </div>
              </div>
            </section>
            <section className="main-gallery" />
            <section className="main-partners">
              <div className="main-partners--label">Partnerzy</div>
              <div className="main-partners__partners" />
            </section>
            <section className="main-trip">
              <div className="main-trip--label">Najbliższy wyjazd</div>
              <div className="main-trip__data">
                <div className="main-trip__data--text">
                  <span className="main-trip__data--">Kraków</span>
                  <span className="main-trip__data--">12/03/2018 - 23/03/2018</span>
                  <span className="main-trip__data--">Interactively facilitate virtual supply chains whereas parallel total linkage.</span>
                  <button className="main-trip__data--" type="button">Zobacz więcej</button>
                </div>
                <div className="main-trip__data--img" />
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

  return (
    <MainPageTemplate
      path={post.frontmatter.path}
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
  path: PropTypes.string.isRequired,
  html: PropTypes.any.isRequired //eslint-disable-line
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
        description
      }
      html
    }
  }
`;
