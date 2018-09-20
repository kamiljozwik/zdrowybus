import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Nabvar from './Navbar';
// import Footer from '../components/Footer';

import '../styles/styles.scss';

const TemplateWrapper = ({ children, location }) => (
    <React.Fragment>
        <div>
            <Helmet title="ZdrowyBus" />
            <Nabvar />
            <div>{children}</div>
        </div>
    </React.Fragment>
);

// TemplateWrapper.propTypes = {
//     children: PropTypes.func,
//     location: PropTypes.object
// };

export default TemplateWrapper;
