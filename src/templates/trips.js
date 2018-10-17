import React from 'react';
import Layout from '../components/layout';

export const TripsPageTemplate = () => (
  <Layout>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Nasze wyprawy</div>
        <div className="blogEntry__second-line">coming soon...</div>
      </div>
    </section>
  </Layout>
);

const TripsPage = () => <TripsPageTemplate />;


export default TripsPage;
