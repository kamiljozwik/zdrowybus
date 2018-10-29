import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Logo from '../img/Logo_small.png';
import youtube from '../img/social/youtube--black.svg';
import facebook from '../img/social/facebook--black.svg';
import instagram from '../img/social/instagram--black.svg';
import twitter from '../img/social/twitter--black.svg';


const Footer = () => (
  <StaticQuery
    query={graphql`
    query Footer {
      allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: {eq: "contact"}
        }
      }
    ) {
        edges {
          node {
            id
            frontmatter {
              emailBus
              emailArek
            }
          }
        }
      }
    }
      `}
    render={dataQuery => (
      <footer className="footer">
        <div className="footer__brand">zdrowybus.pl / 2018 / all rights reserved</div>
        <div className="footer__logo">
          <img
            className="footer__logo__img"
            src={Logo}
            alt="sidebar logo"
            role="presentation"
          />
        </div>
        <div className="footer__social">
          <div className="footer__social--yt"><a href="https://www.youtube.com/channel/UCYkgb3qAj6vQ9bgF_Eitvdg" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="youtube" /></a></div>
          <div className="footer__social--fb"><a href="https://facebook.com/ZdrowyBuspl" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a></div>
          <div className="footer__social--instagram"><a href="https://www.instagram.com/zdrowybus.pl" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a></div>
          <div className="footer__social--twitter"><a href="https://twitter.com/ZdrowyBus" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a></div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
