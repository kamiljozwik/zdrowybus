import React from 'react';

export const BlogEntryPageTemplate = () => (
    <section className="blogEntry component-wrapper">
        <div className="blogEntry_body component_body">
            <div className="blogEntry__first-line">ZdrowyBus BLOG</div>
            <div className="blogEntry__second-line">coming soon...</div>
        </div>
    </section>
);

const BlogEntryPage = () => <BlogEntryPageTemplate />;


export default BlogEntryPage;
