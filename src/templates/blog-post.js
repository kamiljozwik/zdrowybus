import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import LayoutBlog from '../components/layout-blog';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  tags,
  date
}) => {
  const PostContent = contentComponent || Content;

  return (
    <LayoutBlog path={`/tags/${tags[0]}`}>
      <section>
        {helmet || ''}
        <div>
          <div>
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </section>
    </LayoutBlog>
  );
};

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
      frontmatter {
        date
        title
        description
        tags
      }
    }
  }
`;

