import React from 'react'
import PropTypes from 'prop-types'
import { TemplateMain } from '../../templates/main'

const TemplateMainPreview = ({ entry, widgetFor }) => (
  <TemplateMain
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TemplateMainPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TemplateMainPreview
