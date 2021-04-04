import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container } from "react-bootstrap";
import { groupBy, mapValues, map, split, last } from "lodash";

export default function WritingList() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              section
              subsection
            }
          }
        }
      }
    }
  `);

  const writings = mapValues(
    groupBy(
      data.allMarkdownRemark.edges.map(
        ({
          node: {
            frontmatter: { slug, section, subsection },
          },
        }) => ({
          path: slug,
          name: last(split(slug, "/")),
          section,
          subsection,
        })
      ),
      "section"
    ),
    (values) => groupBy(values, "subsection")
  );

  return (
    <Container>
      {map(writings, (subsections, section) => {
        return (
          <div key={section}>
            <h2 className="writing-link-title">{section}</h2>

            {map(subsections, (slugs, subsection) => {
              return (
                <div key={subsection}>
                  {subsection ? <h4>{subsection}</h4> : ""}
                  {map(slugs, (slug) => (
                    <li key={slug.path} className="writing-link">
                      <Link to={slug.path}>{slug.name}</Link>
                    </li>
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
}
