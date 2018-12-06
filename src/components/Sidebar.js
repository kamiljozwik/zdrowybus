import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import { Link, navigate } from 'gatsby';
import Logo from '../img/Logo_small.png';

const menuItemsList = {
  '/main': 'O nas',
  '/trips': 'Wyprawy',
  '/blog-page': 'BLOG',
  '/team': 'Zespół',
  '/offer': 'Współpraca',
  '/contact': 'Kontakt'
};

const renderList = path => (
  Object.keys(menuItemsList).map((item, i) => (
    <li className={`sidebar__item ${path === item ? 'active' : ''}`} key={nanoid()}>
      {console.log(path, item)}
      <Link to={item}>{menuItemsList[item]}</Link>
    </li>
  ))
);

const Sidebar = ({ path }) => (
  <nav className="sidebar">
    <div className="sidebar__lead">
      <p className="sidebar__lead--title">ZdrowyBus</p>
      <img
        className="sidebar__lead--logo"
        src={Logo}
        alt="sidebar logo"
        role="presentation"
        onClick={() => navigate('/main')}
        onKeyDown={() => navigate('/main')}
      />
    </div>
    <ul className="sidebar__links">
      {renderList(path)}
    </ul>
  </nav>
);

Sidebar.propTypes = {
  path: PropTypes.string,
};

Sidebar.defaultProps = {
  path: '/'
};

export default Sidebar;
