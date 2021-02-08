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

  const writings = data.allMarkdownRemark.edges.map((w) => ({
    path: w.node.frontmatter.slug,
    name: w.node.frontmatter.slug.split("/").slice(2),
  }));

  const group = (allWritings) => {
    const groups = {};

    allWritings.forEach((w) => {
      const key = w.name.shift();

      if (groups[key]) {
        groups[key].push(w);
      } else if (w.name.length) {
        groups[key] = [w];
      }
    });

    return groups;
  };

  return (
    <Container>
      {Object.entries(group(writings)).map(([title, slugs]) => {
        return (
          <div key={title}>
            <div className="writing-link-title">{title}</div>

            {slugs.map((slug) => (
              <li key={slug.path} className="writing-link">
                <Link to={slug.path}>{slug.name.pop()}</Link>
              </li>
            ))}
          </div>
        );
      })}
    </Container>
  );
}
