import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { CSSPlugin, AttrPlugin } from 'gsap/all';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/styles.scss';

const plugins = [CSSPlugin, AttrPlugin]; // eslint-disable-line

// const TemplateWrapper = ({ children }) => (
const TemplateWrapper = props => (
  <div id="container">
    <Helmet
      title="ZdrowyBus"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Sidebar path={props.path} />
    <div>{props.children}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired
};

export default TemplateWrapper;
