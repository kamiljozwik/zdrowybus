import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/styles.scss';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet title="ZdrowyBus" />
        <div>{children}</div>
    </div>
);

// TemplateWrapper.propTypes = {
//     children: PropTypes.func,
// };

export default TemplateWrapper;