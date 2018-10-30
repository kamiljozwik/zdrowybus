import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import nanoid from 'nanoid';
import moment from 'moment';
import LayoutBlog from '../components/layout-blog';

const renderNewPosts = newPosts => newPosts.map(post => (
  <div className="blog__section new-post" key={nanoid()}>
    <div className="new-post--date">{moment(post.node.frontmatter.date).format('DD/MM/YYYY')}</div>
    <div className="new-post--title">{post.node.frontmatter.title}</div>
    <div className="new-post--desc">{post.node.frontmatter.description}</div>
    <Link className="new-post--more btn" to={post.node.fields.slug}>Więcej</Link>
  </div>
));

export const BlogEntryPageTemplate = ({ path, newPosts, tripsPosts, healthPosts, trainingPosts, couchingPosts }) => (
  <LayoutBlog path={path}>
    <section className="blog component-wrapper">
      <div className="blog__jumbo jumbo">
        <div className="jumbo__content-wrapper">
          <div className="jumbo__label">Najnowsze Posty</div>
          {renderNewPosts(newPosts)}
        </div>
      </div>
      <div className="blog__introduction">
        <img className="introduction--image" src="https://via.placeholder.com/400x400" alt="introduction" />
        <div className="introduction--content">
          <p className="upper-text">Continually administrate 2.0 opportunities with B2C infrastructures. Globally communicate proactive leadership skills vis-a-vis stand-alone architectures. Enthusiastically productivate empowered metrics without B2B infrastructures. Uniquely fabricate resource-leveling e-business after high-payoff human capital. Authoritatively develop user friendly markets through effective imperatives.</p>
          <p className="lower-text">Continually administrate 2.0 opportunities with B2C infrastructures. Globally communicate proactive leadership skills vis-a-vis stand-alone architectures. Enthusiastically productivate empowered metrics without B2B infrastructures. Uniquely fabricate resource-leveling e-business after high-payoff human capital. Authoritatively develop user friendly markets through effective imperatives.</p>          
        </div>
      </div>
      <div className="blog__body component_body">
        <div className="left-panel" />
        <div className="blog__sections">
          <div className="blog__section blog__trips">
            <div className="blog__section--label">Najnowsze - Wycieczki</div>
            {renderNewPosts(tripsPosts)}
            <div className="seeAll">
              <Link className="btn" to="/tags/blog-trips/">Zobacz wszystkie</Link>
            </div>
          </div>
          <div className="blog__section blog__health">
            <div className="blog__section--label">Najnowsze - Zdrowie</div>
            {renderNewPosts(healthPosts)}
            <div className="seeAll">
              <Link className="btn" to="/tags/blog-health/">Zobacz wszystkie</Link>
            </div>
          </div>
          <div className="blog__section blog__training">
            <div className="blog__section--label">Najnowsze - Trening</div>
            {renderNewPosts(trainingPosts)}
            <div className="seeAll">
              <Link className="btn" to="/tags/blog-training/">Zobacz wszystkie</Link>
            </div>
          </div>
          <div className="blog__section blog__couching">
            <div className="blog__section--label">Najnowsze - Rozwój</div>
            {renderNewPosts(couchingPosts)}
            <div className="seeAll">
              <Link className="btn" to="/tags/blog-couching/">Zobacz wszystkie</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </LayoutBlog>
);

const BlogEntryPage = ({ data }) => {
  const { page } = data;
  const { newPosts } = data;
  const { tripsPosts } = data;
  const { healthPosts } = data;
  const { trainingPosts } = data;
  const { couchingPosts } = data;

  return (
    <BlogEntryPageTemplate
      path={page.frontmatter.path}
      newPosts={newPosts.edges}
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
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { in: "blog-post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...NewTripsData
        }
      }
    }
    tripsPosts: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "blog-trips" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...NewTripsData
        }
      }
    }
    healthPosts: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "blog-health" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...NewTripsData
        }
      }
    }
    trainingPosts: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "blog-training" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          ...NewTripsData
        }
      }
    }
    couchingPosts: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "blog-couching" } } }
    ) {
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
