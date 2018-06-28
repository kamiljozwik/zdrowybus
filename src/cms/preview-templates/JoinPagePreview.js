import React from 'react';
import PropTypes from 'prop-types';
import { JoinPageTemplate } from '../../templates/join';

const JoinPagePreview = ({ entry, getAsset }) => (
    <JoinPageTemplate
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

JoinPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default JoinPagePreview;
