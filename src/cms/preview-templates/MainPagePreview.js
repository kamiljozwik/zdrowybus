import React from 'react';
import PropTypes from 'prop-types';
import { MainPageTemplate } from '../../templates/main-page';

const MainPagePreview = ({ entry, getAsset }) => (
    <MainPageTemplate
        jumbotrone={{
            title: entry.getIn(['data', 'jumbotrone', 'title']),
            description: entry.getIn(['data', 'jumbotrone', 'description']),
        }}
        intro={{
            title: entry.getIn(['data', 'intro', 'title']),
            description: entry.getIn(['data', 'intro', 'description']),
        }}
        notes={{
            title: entry.getIn(['data', 'notes', 'title']),
            description: entry.getIn(['data', 'notes', 'description']),
        }}
    />
);

MainPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default MainPagePreview;
