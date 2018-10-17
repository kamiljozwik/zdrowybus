import React from 'react';
import PropTypes from 'prop-types';
import { MainPageTemplate } from '../../templates/main-page';

const MainPagePreview = ({ entry, widgetFor }) => (
  <MainPageTemplate
    jumbotrone={{
      title: entry.getIn(['data', 'jumbotrone', 'title']),
      description: entry.getIn(['data', 'jumbotrone', 'description']),
    }}
    html={widgetFor('body')}
  />
);

MainPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

MainPagePreview.defaultProps = {
  entry: {},
  widgetFor: () => {}
};

export default MainPagePreview;
