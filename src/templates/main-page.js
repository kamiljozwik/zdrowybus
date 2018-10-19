import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax } from 'gsap/TweenMax';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

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
      TweenMax.to(desc, 0.3, { height: 0 });
      desc.classList.remove('show');
    } else {
      TweenMax.to(desc, 0.3, { height: 600 });
      desc.classList.add('show');
    }
    const button = event.target.innerHTML;
    button === 'Pokaż' ? event.target.innerHTML = 'Ukryj' : event.target.innerHTML = 'Pokaż'; // eslint-disable-line
  }

  render() {
    return (
      <Layout path={this.path}>
        <section className="main component-wrapper">
          <div className="main__jumbo jumbo">
            <div className="jumbo__title">{this.jumbotrone.title}</div>
            <div className="jumbo__desc">{this.jumbotrone.description}</div>
          </div>
          <div className="main__body component_body">
            <section className="main-desc">
              <div className="main-desc__general">{this.description}</div>
              <div ref={this.purposes} className="main-desc__purposes cms-content" dangerouslySetInnerHTML={{ __html: this.html }} />
              <button type="button" className="btn main-desc__purposes--toggle" onClick={this.togglePurposes}>Pokaż</button>
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
