import React from 'react';
import Layout from '../components/layout';

export const ContactPageTemplate = () => (
  <Layout>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Kontakt</div>
        <div className="blogEntry__second-line">zdrowybus@gmail.com</div>
      </div>
    </section>
  </Layout>
);

const ContactPage = () => <ContactPageTemplate />;


export default ContactPage;
