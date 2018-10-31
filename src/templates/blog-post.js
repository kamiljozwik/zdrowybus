import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import moment from 'moment';
import Content, { HTMLContent } from '../components/Content';
import LayoutBlog from '../components/layout-blog';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  graphic,
  helmet,
  tags,
  date
}) => (
  <LayoutBlog path={`/tags/${tags[0]}`}>
    <section className="blog-post blog component-wrapper">
      <div className="blog__jumbo jumbo" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(50, 50, 50, 1) 100%), url(${graphic}-/resize/1920x1080/)` }}>
        <div className="jumbo__content-wrapper withContent">
          <div className="date">{moment(date).format('DD/MM/YYYY')}</div>
          <div className="title">{title}</div>
          <div className="desc">{description}</div>
        </div>
      </div>
      <div className="blog-post__body blog__body component_body">
        <div className="left-panel" />
        <div className="blog__section blog__trips">
          <div className="blog-post--content cms-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </section>
  </LayoutBlog>
)

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.instanceOf(Helmet).isRequired,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      graphic={post.frontmatter.graphic}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
    />
  );
};

BlogPost.propTypes = {
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

