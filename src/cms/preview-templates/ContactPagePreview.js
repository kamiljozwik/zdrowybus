import React from 'react';
import PropTypes from 'prop-types';
import { ContactPageTemplate } from '../../templates/contact';

const ContactPagePreview = ({ entry, getAsset }) => (
    <ContactPageTemplate
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

ContactPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ContactPagePreview;
