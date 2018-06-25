import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Nabvar from '../components/Navbar';

import '../styles/styles.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Nabvar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
