import React from 'react';
import Link from 'gatsby-link';
import underContruction from '../assets/construction.jpg';

const UnderContruction = () => (
  <section>
    <img
      src={underContruction}
      alt="under construction"
      style={{
        position: 'relative',
        display: 'block',
        height: '300px',
        margin: '100px auto'
      }}
    />
    <Link to="/">
      <span
        style={{
          display: 'block',
          'text-align': 'center'
        }}
      >
        Strona główna
      </span>
    </Link>
  </section>
);

export default UnderContruction;
