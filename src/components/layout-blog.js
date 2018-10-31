import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { CSSPlugin, AttrPlugin } from 'gsap/all';
import SidebarBlog from './Sidebar-blog';
// import Footer from './Footer';
import '../styles/styles.scss';

const plugins = [CSSPlugin, AttrPlugin]; // eslint-disable-line

// const TemplateWrapper = ({ children }) => (
const TemplateWrapper = props => (
  <React.Fragment>
    <div className="blog-container">
      <Helmet
        title="ZdrowyBus"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <SidebarBlog path={props.path} />
      <div>{props.children}</div>
      {/* <Footer /> */}
    </div>
  </React.Fragment>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired
};

export default TemplateWrapper;
