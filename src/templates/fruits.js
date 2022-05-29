import { graphql } from 'gatsby';
import React from 'react';

export default function Fruits({ data }) {
  const {
    frontmatter: { title },
    html,
  } = data.markdownRemark;
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;
