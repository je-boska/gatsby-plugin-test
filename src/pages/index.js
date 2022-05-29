import { graphql } from 'gatsby';
import * as React from 'react';
import Hero from '../../plugins/test-pkg/src/components/Hero';
import Items from '../../plugins/test-pkg/src/components/Items';

export default function IndexPage({ data }) {
  console.log(data.allMarkdownRemark.edges);
  return (
    <main>
      <Hero />
      <Items items={data.allMarkdownRemark.edges} />
    </main>
  );
}

export const query = graphql`
  query items {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
