import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'gatsby';
import './styles/jumbo.scss';

const Jumbo = ({ page, title, desc, children }) => (
  <div className={`${page}__jumbo jumbo`}>
    <div className="jumbo__title">{title}</div>
    <div className="jumbo__desc">{desc}</div>
    {children}
  </div>
);

const TripJumbo = ({ type, title, place, date, endDate, desc, graphic, slug, isTripsList }) => (
  <div className={`${type}__jumbo jumbo`} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(33,33,33,1) 100%), url(${graphic}-/resize/1920x1080/)` }}>
    <div className="jumbo__content-wrapper">
      {isTripsList ? <div className="label">Najbliższy wyjazd</div> : <></>}
      <div className="title">{title}</div>
      <div className="place">{place}</div>
      <div className="date">{`${moment(date).format('DD/MM/YYYY')} - ${moment(endDate).format('DD/MM/YYYY')}`}</div>
      <div className="desc">{desc}</div>
      {isTripsList ? <div className="button btn"><Link to={slug}>Zobacz więcej</Link></div> : <></>}
    </div>
  </div>
);

export { TripJumbo };
export default Jumbo;

Jumbo.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Jumbo.defaultProps = {
  children: <></>
};

TripJumbo.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  graphic: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  isTripsList: PropTypes.bool,
};

TripJumbo.defaultProps = {
  isTripsList: false
};
