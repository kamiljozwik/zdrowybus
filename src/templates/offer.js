import React from 'react';
import Layout from '../components/layout';

export const OfferPageTemplate = () => (
  <Layout>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Współpraca</div>
        <div className="blogEntry__second-line">coming soon...</div>
      </div>
    </section>
  </Layout>
);

const OfferPage = () => <OfferPageTemplate />;


export default OfferPage;
