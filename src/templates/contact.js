import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Jumbo from '../components/jumbos/page';
import youtube from '../img/social/youtube.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';

export const ContactPageTemplate = ({ path, emailBus, emailArek }) => (
  <Layout path={path}>
    <section className="contact component-wrapper">
      <Jumbo page="contact" title="" desc="">
        <div className="contact__content-wrapper">
          <div className="jumbo__email--bus"><a href={`mailto: ${emailBus}`}>{emailBus}</a></div>
          <div className="jumbo__email--arek"><a href={`mailto: ${emailArek}`}>{emailArek}</a></div>
          <div className="jumbo__social">
            <div><a href="https://www.youtube.com/channel/UCYkgb3qAj6vQ9bgF_Eitvdg" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="youtube" /></a></div>
            <div><a href="https://facebook.com/ZdrowyBuspl" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a></div>
            <div><a href="https://www.instagram.com/zdrowybus.pl" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a></div>
            <div><a href="https://twitter.com/ZdrowyBus" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a></div>
          </div>
        </div>
      </Jumbo>
    </section>
  </Layout>
);

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <ContactPageTemplate
      path={post.frontmatter.path}
      emailBus={post.frontmatter.emailBus}
      emailArek={post.frontmatter.emailArek}
    />
  );
};

export default ContactPage;

ContactPageTemplate.propTypes = {
  path: PropTypes.string.isRequired,
  emailBus: PropTypes.string.isRequired,
  emailArek: PropTypes.string.isRequired
};

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        path
        title
        emailBus
        emailArek
      }
    }
  }
`;
