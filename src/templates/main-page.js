import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax } from 'gsap/TweenMax';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

class MainPageTemplate extends Component {
  constructor(props) {
    super(props);
    this.jumbotrone = props.jumbotrone;
    this.html = props.html;
    this.description = props.description;
    this.path = props.path;
    this.purposes = React.createRef();
  }

  togglePurposes = (event) => {
    this.purposes.current.classList.toggle('show');
    // TweenMax.to(this.purposes.current, 0.2, { height: 0 });

    // if(!this.purposes.current.hasClass('show')) {
    //   TweenMax.to(this.purposes.current, 0.2, { height: 0 });
    //   $this.addClass("closed")
    // }else{
    //   TweenLite.set($content, {height:"auto"})
    //   TweenLite.from($content, 0.2, {height:0})
    //   $this.removeClass("closed");
    // }

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
              <button type="button" className="btn main-desc__purposes--toggle" onClick={this.togglePurposes}>Pokaż</button>
              <div ref={this.purposes} className="main-desc__purposes cms_content" dangerouslySetInnerHTML={{ __html: this.html }} />
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
// export MainPageTemplate;

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
