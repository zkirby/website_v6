/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { graphql, Link } from "gatsby";
import { FaHome } from "react-icons/fa";
import { compact, join } from "lodash";

import "./markdown.scss";

import { TRACKING_EVENT } from "../utils/constants";
import { FLUFF_LEVELS, MD_REPLACEMENTS } from "./markdown.constant";

function createMkdown(html) {
  return html.replaceAll("IMG_PATH", MD_REPLACEMENTS.IMG_PATH);
}

export default function Markdown({ data: { markdownRemark } }) {
  const {
    html,
    frontmatter: { slug, section, subsection },
  } = markdownRemark;

  const [fluff, changeFluff] = useState(FLUFF_LEVELS.ALL);
  const ALL_FLUFF = html.includes(MD_REPLACEMENTS.FLUFF)
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
  const mkdown = createMkdown(html);
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
            dangerouslySetInnerHTML={{ __html: mkdown }}
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
