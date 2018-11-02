import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Disqus from 'disqus-react';
import { HTMLContent } from '../components/Content';
import LayoutBlog from '../components/layout-blog';
import BlogJumbo from '../components/jumbos/blog';

export const BlogPostTemplate = ({
  location,
  content,
  // contentComponent,
  description,
  title,
  graphic,
  tags,
  date
}) => {
  const disqusConfig = {
    url: `https://zdrowybus.pl${location.pathname}`,
    identifier: `${location.pathname}`,
    title,
  };
  return (
    <LayoutBlog path={`/tags/${tags[0]}`}>
      <section className="blog-post blog component-wrapper">
        <BlogJumbo
          title={title}
          desc={description}
          date={date}
          graphic={graphic}
          slug=""
          isNewest={false}
        />
        <div className="blog-post__body blog__body component_body">
          <div className="left-panel" />
          <div className="blog__section blog__trips">
            <div className="blog-post--content cms-content" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
        <div className="blog-post__comments">
          <Disqus.DiscussionEmbed shortname="zdrowybus" config={disqusConfig} />
        </div>
      </section>
    </LayoutBlog>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  // contentComponent: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  graphic: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  // helmet: PropTypes.instanceOf(Helmet).isRequired,
};

const BlogPost = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      graphic={post.frontmatter.graphic}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      location={location}
    />
  );
};

BlogPost.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      ...BlogData
    }
  }
`;

