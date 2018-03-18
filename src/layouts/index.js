import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxProvider } from 'react-scroll-parallax';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation';
import './styles/index.scss';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
  <ParallaxProvider>
    <div>
      <Helmet
        title="Zdrowy Bus"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Navigation />
      <div>{children()}</div>
      <Footer />
    </div>
  </ParallaxProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
