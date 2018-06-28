import React from 'react';
import PropTypes from 'prop-types';
import { ProjectPageTemplate } from '../../templates/project';

const ProjectPagePreview = ({ entry, getAsset }) => (
    <ProjectPageTemplate
        firstField={{
            title: entry.getIn(['data', 'firstField', 'title']),
            description: entry.getIn(['data', 'firstField', 'description']),
        }}
        secondField={{
            title: entry.getIn(['data', 'secondField', 'title']),
            description: entry.getIn(['data', 'secondField', 'description']),
        }}
    />
);

ProjectPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ProjectPagePreview;
