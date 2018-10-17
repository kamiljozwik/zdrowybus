import React from 'react';
import Layout from '../components/layout';

export const TeamPageTemplate = () => (
  <Layout>
    <section className="blogEntry component-wrapper">
      <div className="blogEntry_body component_body">
        <div className="blogEntry__first-line">Zespół</div>
        <div className="blogEntry__second-line">coming soon...</div>
      </div>
    </section>
  </Layout>
);

const TeamPage = () => <TeamPageTemplate />;


export default TeamPage;
