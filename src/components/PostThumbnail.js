import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'gatsby';

const PostThumbnail = ({ type, title, date, slug, graphic }) => (
  <div className="blog__section new-post">
    <div className="new-post--image" style={{ backgroundImage: `url(${graphic}-/resize/352x198/)` }} />
    <div className="new-post--data">
      <div className="new-post--type">{type}</div>
      <div className="new-post--title">{title}</div>
      <div className="new-post--footer">
        <div className="new-post--date">{moment(date).format('DD/MM/YYYY')}</div>
        <Link className="new-post--more" to={slug}>Czytaj</Link>
      </div>
    </div>
  </div>
);

export default PostThumbnail;
