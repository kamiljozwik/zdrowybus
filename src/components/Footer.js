import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Logo from '../img/Logo_small.png';
import fb from '../img/facebook.svg';
import yt from '../img/youtube.svg';

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
        <div className="footer__logo">
          <img
            className="footer__logo__img"
            src={Logo}
            alt="sidebar logo"
            role="presentation"
          />
        </div>
        {/* <div className="footer__data">
          <div className="footer__data--mail">
            <span>{dataQuery.allMarkdownRemark.edges[0].node.frontmatter.emailBus}</span>
            <span>{dataQuery.allMarkdownRemark.edges[0].node.frontmatter.emailArek}</span>
          </div>
          <div className="footer__data--social">
            <a href="https://www.youtube.com" className="footer-yt">
              <img src={yt} alt="YT" />
            </a>
            <a href="https://www.youtube.com" className="footer-fb">
              <img src={fb} alt="FB" />
            </a>
          </div>
        </div> */}
      </footer>
    )}
  />
);

export default Footer;
