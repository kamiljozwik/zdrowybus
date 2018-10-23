import { graphql } from 'gatsby';

export const query = graphql`
  fragment NewTripsData on MarkdownRemark {
    frontmatter {
      title
      description
    }
  }
`;

export const temp = 'temp';
