import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import nanoid from 'nanoid';
import moment from 'moment';
import LayoutBlog from '../components/layout-blog';

const renderNewPosts = newPosts => newPosts.map(post => (
  <div className="blog__section new-post" key={nanoid()}>
    <div className="new-post--image" style={{ backgroundImage: `url(${post.node.frontmatter.graphic}-/resize/300x200/)` }} />
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

export const BlogEntryPageTemplate = ({ path, newestPost, newPosts, tripsPosts, healthPosts, trainingPosts, couchingPosts }) => (
  <LayoutBlog path={path}>
    <section className="blog component-wrapper">
      <div className="blog__jumbo jumbo" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(50, 50, 50, 1) 100%), url(${newestPost.node.frontmatter.graphic}-/resize/1920x1080/)` }}>
        <div className="jumbo__content-wrapper">
          <div className="label">Najnowszy Post</div>
          <div className="title">{newestPost.node.frontmatter.title}</div>
          <div className="desc">{newestPost.node.frontmatter.description}</div>
          <div className="date">{moment(newestPost.node.frontmatter.date).format('DD/MM/YYYY')}</div>
          <Link className="see-more" to={newestPost.node.fields.slug}>Czytaj</Link>
        </div>
      </div>
      <div className="blog__newests-posts">
        <div className="left-panel" />
        <div className="blog__newests-posts--container">
          <div className="blog__newests-posts--label">Najnowsze posty ___</div>
          {renderNewPosts(newPosts)}
        </div>
      </div>
      <div className="blog__introduction">
        {/* <img className="introduction--image" src="https://via.placeholder.com/400x400" alt="introduction" /> */}
        <div className="introduction--image" />
        <div className="introduction--content">
          <p className="upper-text">Continually administrate 2.0 opportunities with B2C infrastructures. Globally communicate proactive leadership skills.</p>
          <p className="lower-text">Continually administrate 2.0 opportunities with B2C infrastructures. Globally communicate proactive leadership skills.</p>
        </div>
      </div>
      <div className="blog__body component_body">
        <div className="left-panel" />
        <div className="blog__sections">
          <div className="blog__section blog__trips">
            <div className="blog__section--label">Podróże ___</div>
            {renderNewPosts(tripsPosts)}
            <div className="blog__section--seeAll">
              <Link className="see-all" to="/tags/blog-trips/">Zobacz wszystkie</Link>
            </div>
          </div>
          <div className="blog__section blog__health">
            <div className="blog__section--label">Zdrowie ___</div>
            {renderNewPosts(healthPosts)}
            <div className="blog__section--seeAll">
              <Link className="see-all" to="/tags/blog-health/">Zobacz wszystkie</Link>
            </div>
          </div>
          <div className="blog__section blog__training">
            <div className="blog__section--label">Trening ___</div>
            {renderNewPosts(trainingPosts)}
            <div className="blog__section--seeAll">
              <Link className="see-all" to="/tags/blog-training/">Zobacz wszystkie</Link>
            </div>
          </div>
          <div className="blog__section blog__couching">
            <div className="blog__section--label">Rozwój ___</div>
            {renderNewPosts(couchingPosts)}
            <div className="blog__section--seeAll">
              <Link className="see-all" to="/tags/blog-couching/">Zobacz wszystkie</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </LayoutBlog>
);

const BlogEntryPage = ({ data }) => {
  const { page } = data;
  const { newPosts, tripsPosts, healthPosts, trainingPosts, couchingPosts } = data;

  return (
    <BlogEntryPageTemplate
      path={page.frontmatter.path}
      newestPost={newPosts.edges[0]}
      newPosts={newPosts.edges.slice(1)}
      tripsPosts={tripsPosts.edges}
      healthPosts={healthPosts.edges}
      trainingPosts={trainingPosts.edges}
      couchingPosts={couchingPosts.edges}
    />
  );
};

BlogEntryPageTemplate.propTypes = {
  path: PropTypes.string,
  newPosts: PropTypes.array,
  tripsPosts: PropTypes.array,
  healthPosts: PropTypes.array,
  trainingPosts: PropTypes.array,
  couchingPosts: PropTypes.array,
};

BlogEntryPageTemplate.defaultProps = {
  path: '/',
  newPosts: [],
  tripsPosts: [],
  healthPosts: [],
  trainingPosts: [],
  couchingPosts: [],
};

export default BlogEntryPage;

export const blogPageQuery = graphql`
  query Blog($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        title
      }
    }
    newPosts: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { in: "blog-post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...BlogData
        }
      }
    }
    tripsPosts: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "blog-trips" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...BlogData
        }
      }
    }
    healthPosts: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "blog-health" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...BlogData
        }
      }
    }
    trainingPosts: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "blog-training" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...BlogData
        }
      }
    }
    couchingPosts: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "blog-couching" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...BlogData
        }
      }
    }
  }
`;
