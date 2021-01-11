import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container } from "react-bootstrap";

export default function WritingList() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      {data.allMarkdownRemark.edges.map(({ node: { frontmatter } }) => {
        return (
          <div>
            <Link to={frontmatter.slug}>{frontmatter.slug}</Link>
          </div>
        );
      })}
    </Container>
  );
}
