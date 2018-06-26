import React from 'react';
// import Link from 'gatsby-link';
import Logo from '../img/Logo_small.png';

const Navbar = () => (
  <nav className="navbar">
    <img className="navbar__logo" src={Logo} alt="navbar logo" />
    <ul className="navbar__wrapper">
      <li className="navbar__item">Projekt</li>
      <li className="navbar__item">Dołącz</li>
      <li className="navbar__item">Zespół</li>
      <li className="navbar__item">BLOG</li>
      <li className="navbar__item">Kontakt</li>
    </ul>
  </nav>
);

export default Navbar;
