import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import nanoid from 'nanoid';
import LayoutBlog from '../components/layout-blog';
import BlogJumbo from '../components/jumbos/blog';
import PostThumbnail from '../components/PostThumbnail';

const renderNewPosts = (newPosts, link = '', isVisible = true) => {
  const thumbnails = newPosts.map(post => (
    <PostThumbnail
      key={nanoid()}
      type={post.node.frontmatter.type}
      title={post.node.frontmatter.title}
      date={post.node.frontmatter.date}
      slug={post.node.fields.slug}
      graphic={post.node.frontmatter.graphic}
    />
  ));
  return (
    <>
      {thumbnails}
      {isVisible
        ? (
          <div className="blog__section--seeAll">
            <Link className="see-all" to={`/tags/${link}/`}>Zobacz wszystkie</Link>
          </div>
        ) : <></>
      }
    </>
  );
};

export const BlogEntryPageTemplate = ({ path, newestPost, newPosts, tripsPosts, healthPosts, trainingPosts, couchingPosts }) => (
  <LayoutBlog path={path}>
    <section className="blog component-wrapper">
      <BlogJumbo
        title={newestPost.node.frontmatter.title}
        desc={newestPost.node.frontmatter.description}
        date={newestPost.node.frontmatter.date}
        graphic={newestPost.node.frontmatter.graphic}
        slug={newestPost.node.fields.slug}
        isNewest
      />
      <div className="blog__newests-posts">
        <div className="left-panel" />
        <div className="blog__newests-posts--container">
          <div className="blog__newests-posts--label">Najnowsze posty ___</div>
          {renderNewPosts(newPosts, '', false)}
        </div>
      </div>
      <div className="blog__introduction">
        <div className="introduction--image" />
        <div className="introduction--content">
          <p className="upper-text">Witaj na blogu prowadzonym przez zespół zdrowego busa.</p>
          <p className="lower-text">Znajdziesz tutaj wiele ciekawych informacji na tematy związane z podróżowaniem, zdrowym trybem życia oraz rozwojem osobistm.</p>
        </div>
      </div>
      <div className="blog__body component_body">
        <div className="left-panel" />
        <div className="blog__sections">
          <div className="blog__section blog__trips">
            <div className="blog__section--label">Podróże ___</div>
            {renderNewPosts(tripsPosts, 'blog-trips')}
          </div>
          <div className="blog__section blog__health">
            <div className="blog__section--label">Zdrowie ___</div>
            {renderNewPosts(healthPosts, 'blog-health')}
          </div>
          <div className="blog__section blog__training">
            <div className="blog__section--label">Trening ___</div>
            {renderNewPosts(trainingPosts, 'blog-training')}
          </div>
          <div className="blog__section blog__couching">
            <div className="blog__section--label">Rozwój ___</div>
            {renderNewPosts(couchingPosts, 'blog-couching')}
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
      couchingPosts={couchingPosts ? couchingPosts.edges : []}
    />
  );
};

BlogEntryPageTemplate.propTypes = {
  path: PropTypes.string,
  newPosts: PropTypes.array,
  newestPost: PropTypes.object,
  tripsPosts: PropTypes.array,
  healthPosts: PropTypes.array,
  trainingPosts: PropTypes.array,
  couchingPosts: PropTypes.array,
};

BlogEntryPageTemplate.defaultProps = {
  path: '/',
  newPosts: [],
  newestPost: {},
  tripsPosts: [],
  healthPosts: [],
  trainingPosts: [],
  couchingPosts: {},
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
