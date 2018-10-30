import { graphql } from 'gatsby';

export const query = graphql`
  fragment NewTripsData on MarkdownRemark {
    frontmatter {
      date
      title
      description
    }
  }
`;

export const temp = 'temp';
