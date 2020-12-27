import React from "react";
import { graphql } from "gatsby";

export default function Markdown({ data }) {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <div className="writing-container">
      <div>With fluff | A nice balance | Just the essentials </div>
      <div
        className="writing-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        date
      }
    }
  }
`;
