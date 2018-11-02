import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <div className="404">
    <div>404</div>
    <p>Strona nie istnieje</p>
    <Link to="/main">Strona Główna</Link>
  </div>
);

export default NotFoundPage;
