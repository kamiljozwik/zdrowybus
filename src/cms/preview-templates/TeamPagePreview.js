import React from 'react';
import PropTypes from 'prop-types';
import { TeamPageTemplate } from '../../templates/team';

const TeamPagePreview = ({ entry, getAsset }) => (
    <TeamPageTemplate
        firstField={{
            title: entry.getIn(['data', 'firstField', 'title']),
            description: entry.getIn(['data', 'firstField', 'description']),
        }}
        person1={{
            name: entry.getIn(['data', 'person1', 'name']),
            description: entry.getIn(['data', 'person1', 'description']),
            avatar: {
                image: getAsset(entry.getIn(['data', 'person1', 'avatar', 'image'])),
                alt: entry.getIn(['data', 'person1', 'avatar', 'alt']),
            }
        }}
    />
);

TeamPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default TeamPagePreview;
