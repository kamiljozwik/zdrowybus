import React from 'react';
import Link from 'gatsby-link';
import logo from '../assets/Logo.png';

const Navigation = () => (
  <nav className="navigation">
    <Link to="/">
      <img className="navigation__logo" src={logo} alt="Logo" />
    </Link>
    <ul className="navigation__wrapper">
      <li className="navigation__item">
        <Link to="/cele">Cele projektu</Link>
      </li>
      <li className="navigation__item">
        <Link to="/kosztorys">Kosztorys</Link>
      </li>
      <li className="navigation__item">
        <Link to="/wsparcie">Jak nas wesprzeć</Link>
      </li>
      <li className="navigation__item">
        <Link to="/zespol">Nasz zespół</Link>
      </li>
      <li className="navigation__item">
        <Link to="/kontakt">Kontakt</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
