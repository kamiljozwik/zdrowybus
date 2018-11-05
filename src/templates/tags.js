import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import nanoid from 'nanoid';
import LayoutBlog from '../components/layout-blog';
import BlogJumbo from '../components/jumbos/blog';
import PostThumbnail from '../components/PostThumbnail';

const renderNewPosts = newPosts => newPosts.map(post => (
  <PostThumbnail
    key={nanoid()}
    type={post.node.frontmatter.type}
    title={post.node.frontmatter.title}
    date={post.node.frontmatter.date}
    slug={post.node.fields.slug}
    graphic={post.node.frontmatter.graphic}
    fromTag
  />
));

export const TagRouteTemplate = ({ posts, tag }) => (
  <LayoutBlog path={`/tags/${tag}`}>
    <section className="blog-post blog component-wrapper">
      <BlogJumbo
        title={posts[0].node.frontmatter.title}
        desc={posts[0].node.frontmatter.description}
        date={posts[0].node.frontmatter.date}
        graphic={posts[0].node.frontmatter.graphic}
        slug={posts[0].node.fields.slug}
        isNewest
      />
      <div className="blog-post__body blog__body component_body">
        <div className="left-panel" />
        <div className="blog__section blog__trips">
          <div className="blog__section--label">Wszystkie posty ___</div>
          {renderNewPosts(posts)}
        </div>
      </div>
    </section>
  </LayoutBlog>
);

const TagRoute = ({ data, pageContext }) => (
  <TagRouteTemplate
    posts={data.allMarkdownRemark.edges}
    tag={pageContext.tag}
  />
);


TagRouteTemplate.propTypes = {
  posts: PropTypes.array.isRequired,
  tag: PropTypes.string.isRequired
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          ...NewTripsData
        }
      }
    }
  }
`;

