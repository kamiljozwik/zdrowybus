import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';
import Logo from '../img/Logo_small.png';

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
      <li className="sidebar__item active"><Link to="/main">O nas</Link></li>
      <li className="sidebar__item"><Link to="/trips">Wyprawy</Link></li>
      <li className="sidebar__item"><Link to="/blogEntry">BLOG</Link></li>
      <li className="sidebar__item"><Link to="/team">Zespół</Link></li>
      <li className="sidebar__item"><Link to="/offer">Współpraca</Link></li>
      <li className="sidebar__item"><Link to="/contact">Kontakt</Link></li>
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
