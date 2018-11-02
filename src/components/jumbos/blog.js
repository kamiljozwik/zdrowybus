import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'gatsby';
import './styles/jumbo.scss';

const BlogJumbo = ({ title, desc, date, graphic, slug, isNewest }) => (
  <div className="blog__jumbo jumbo" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(50, 50, 50, 1) 100%), url(${graphic}-/resize/1920x1080/)` }}>
    <div className={`jumbo__content-wrapper ${!isNewest ? 'withContent' : ''}`}>
      {isNewest ? <div className="label">Najnowszy Post</div> : <></>}
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="date">{moment(date).format('DD/MM/YYYY')}</div>
      {isNewest ? <Link className="see-more" to={slug}>Czytaj</Link> : <></>}
    </div>
  </div>
);

export default BlogJumbo;
