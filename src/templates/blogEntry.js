import React from 'react';
import Layout from '../components/layout'

export const BlogEntryPageTemplate = () => (
    <Layout>
    <section className="blogEntry component-wrapper">
        <div className="blogEntry_body component_body">
            <div className="blogEntry__first-line">ZdrowyBus BLOG</div>
            <div className="blogEntry__second-line">coming soon...</div>
        </div>
    </section>
    </Layout>
);

const BlogEntryPage = () => <BlogEntryPageTemplate />;


export default BlogEntryPage;
