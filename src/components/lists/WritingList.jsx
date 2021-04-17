import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container } from "react-bootstrap";
import { groupBy, mapValues, map, split, last, shuffle } from "lodash";
import { COLOR_POOL } from "../utils/constants";

export default function WritingList() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              slug
              section
              subsection
              doNotList
            }
          }
        }
      }
    }
  `);

  const writings = mapValues(
    groupBy(
      data.allMarkdownRemark.edges
        .filter((w) => !w.node.frontmatter.doNotList)
        .map(({ node: { frontmatter: { slug, section, subsection } } }) => ({
          path: slug,
          name: last(split(slug, "/")),
          section,
          subsection,
        })),
      "section"
    ),
    (values) => groupBy(values, "subsection")
  );

  const cp = shuffle(COLOR_POOL);
  return (
    <Container className="writing-link-container">
      {map(writings, (subsections, section) => {
        const color = cp.pop();

        return (
          <div key={section} className="mb-4">
            <h3 className="writing-link-title">{section}</h3>

            {map(subsections, (slugs, subsection) => {
              return (
                <div key={subsection}>
                  {subsection ? (
                    <div className="text-secondary writing-link-subsection my-1">
                      {subsection}
                    </div>
                  ) : (
                    ""
                  )}
                  {map(slugs, (slug) => (
                    <li
                      style={{ color }}
                      key={slug.path}
                      className="writing-link"
                    >
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
