import { graphql } from 'gatsby';

export const query = graphql`
  fragment NewTripsData on MarkdownRemark {
    frontmatter {
      date
      graphic
      title
      description
      type
    }
  }
`;

export const temp = 'temp';
