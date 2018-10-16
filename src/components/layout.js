import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Sidebar from './Sidebar';

import '../styles/styles.scss';

// const TemplateWrapper = ({ children }) => (
const TemplateWrapper = props => (
  <React.Fragment>
    <div>
      <Helmet
        title="ZdrowyBus"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Sidebar />
      <div>{props.children}</div>
    </div>
  </React.Fragment>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateWrapper;
