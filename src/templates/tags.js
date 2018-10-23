import React from 'react';
import { graphql, Link } from 'gatsby';
import LayoutBlog from '../components/layout-blog';

class TagRoute extends React.Component {
  render() {
    const NewPosts = this.props.data.allMarkdownRemark.edges.slice(0, 3);
    const OldPosts = this.props.data.allMarkdownRemark.edges.slice(3);

    const postLinks = posts => posts.map(post => (
      <li key={post.node.fields.slug}>
        <h2>{post.node.frontmatter.title}</h2>
        <p>{post.node.frontmatter.description}</p>
        <Link to={post.node.fields.slug}>Zobacz</Link>
      </li>
    ));

    // const { tag } = this.props.pageContext;
    const { totalCount } = this.props.data.allMarkdownRemark;
    const tagHeader = `Liczba postów: ${totalCount}`;

    return (
      <LayoutBlog path={`/tags/${this.props.pageContext.tag}`}>
        <section className="blog-post component-wrapper">
          <div className="blog-post__jumbo jumbo">
            <div>{tagHeader}</div>
            <ul>{postLinks(NewPosts)}</ul>
          </div>
          <div className="blog-post__body component_body">
            <div>
              <div>Pozostałe posty:</div>
              <ul>{postLinks(OldPosts)}</ul>
            </div>
          </div>
        </section>
      </LayoutBlog>
    );
  }
}

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
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;

