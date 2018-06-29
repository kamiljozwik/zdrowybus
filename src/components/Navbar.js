import React from 'react';
import PropTypes from 'prop-types';
import Link, { navigateTo } from 'gatsby-link';
import Logo from '../img/Logo_small.png';

const Navbar = ({ path }) => (
    <nav className="navbar">
        <img
            className="navbar__logo"
            src={Logo}
            alt="navbar logo"
            role="presentation"
            onClick={() => navigateTo('/main')}
            onKeyDown={() => navigateTo('/main')}
        />
        <ul className="navbar__wrapper">
            <li className={`navbar__item ${path === '/project' ? 'active' : ''}`}><Link to="/project">Projekt</Link></li>
            <li className={`navbar__item ${path === '/join' ? 'active' : ''}`}><Link to="/join">Dołącz</Link></li>
            <li className={`navbar__item ${path === '/team' ? 'active' : ''}`}><Link to="/team">Zespół</Link></li>
            <li className={`navbar__item ${path === '/blogEntry' ? 'active' : ''}`}><Link to="/blogEntry">BLOG</Link></li>
            <li className={`navbar__item ${path === '/contact' ? 'active' : ''}`}><Link to="/contact">Kontakt</Link></li>
        </ul>
    </nav>
);

Navbar.propTypes = {
    path: PropTypes.string
};

export default Navbar;
