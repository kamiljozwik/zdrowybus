import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import { Link, navigate } from 'gatsby';
import Logo from '../img/Logo_small.png';

const menuItemsList = {
  '/tags/blog-trips': 'Podróże',
  '/tags/blog-health': 'Zdrowie',
  '/tags/blog-training': 'Trening',
  '/tags/blog-couching': 'Rozwój osobisty'
};

const renderList = path => (
  Object.keys(menuItemsList).map((item, i) => (
    <li className={`sidebar__item ${path === item ? 'active' : ''}`} key={nanoid()}>
      <Link to={item}>{menuItemsList[item]}</Link>
    </li>
  ))
);

const Sidebar = ({ path }) => (
  <nav className="sidebar blog">
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
    <div className="sidebar__return"><Link to="/main">Przejdź na stronę</Link></div>
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
