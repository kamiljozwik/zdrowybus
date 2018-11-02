import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import nanoid from 'nanoid';
import moment from 'moment';
import LayoutBlog from '../components/layout-blog';
import BlogJumbo from '../components/jumbos/blog';

const renderNewPosts = newPosts => newPosts.map(post => (
  <div className="blog__section new-post fromTag" key={nanoid()}>
    <div className="new-post--image" style={{ backgroundImage: `url(${post.node.frontmatter.graphic}-/resize/352x198/)` }} />
    <div className="new-post--data">
      <div className="new-post--type">{post.node.frontmatter.type}</div>
      <div className="new-post--title">{post.node.frontmatter.title}</div>
      <div className="new-post--footer">
        <div className="new-post--date">{moment(post.node.frontmatter.date).format('DD/MM/YYYY')}</div>
        <Link className="new-post--more" to={post.node.fields.slug}>Czytaj</Link>
      </div>
    </div>
  </div>
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

