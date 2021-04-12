/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { graphql, Link } from "gatsby";
import { FaHome } from "react-icons/fa";

import { compact, join } from "lodash";
import { TRACKING_EVENT } from "./utils/constants";

const FLUFF_LEVELS = {
  ALL: "With fluff",
  NONE: "No fluff",
};

export default function Markdown({ data }) {
  const { markdownRemark } = data;
  const {
    html,
    frontmatter: { slug, section, subsection },
  } = markdownRemark;
  console.log(markdownRemark, data);
  const [fluff, changeFluff] = useState(FLUFF_LEVELS.ALL);
  const ALL_FLUFF = html.includes('className="fluff"')
    ? Object.values(FLUFF_LEVELS)
    : [];

  useEffect(() => {
    console.log("tracking a blog visit");
    // ReactGA.event({
    //   category: TRACKING_EVENT.BLOG_VISIT,
    //   path: slug,
    //   fluff,
    // });
  });

  const fluffCss = (fluffName) => (fluff === fluffName ? "active-fluff" : "");
  const changeToFluff = (fluffName) => () => changeFluff(fluffName);

  const breadcrumbs = join(compact([section, subsection]), "/");

  return (
    <>
      <div className="floating-home">
        <Link to="/">
          <FaHome className="font-icon" />
        </Link>
      </div>
      <div className="breadcrumbs ml-2">{breadcrumbs}</div>
      <div className="writing-container">
        <div className="writing-content">
          <div className="writing-fluff-selector">
            {ALL_FLUFF.map((fluffLevel, i) => {
              return (
                <>
                  <span
                    key={fluffLevel}
                    className={fluffCss(fluffLevel)}
                    onClick={changeToFluff(fluffLevel)}
                  >
                    {fluffLevel}
                  </span>
                  {i !== ALL_FLUFF.length - 1 && <span>|</span>}
                </>
              );
            })}
          </div>

          <div
            className="writing-text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        date
        section
        subsection
      }
    }
  }
`;
