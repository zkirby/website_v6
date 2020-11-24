import React from "react";

import MoviesList from "./lists/moviesList";
import ProjectList from "./lists/projectList";
import WritingsList from "./lists/writingsList";
import CareerList from "./lists/careerList";

const componentRegistry = {
  Career: { Component: CareerList, description: "$$$" },
  Projects: {
    Component: ProjectList,
    description:
      "Coding projects, extracurricular activities, events, and other involvement",
  },
  Writings: { Component: WritingsList, description: "words yo." },
  Movies: {
    Component: MoviesList,
    description:
      "I\ve been documenting and rating every movie (and occationally tv show) I've seen since senior year of high school. Here is that list, in its entirety.",
  },
};

const RightSideSelector = ({ setLeftSide, setRightSide }) => {
  return (
    <div className="d-flex">
      {Object.entries(componentRegistry).map(
        ([title, { Component, description }]) => (
          <div
            className="ml-2"
            key={title}
            onClick={() =>
              setRightSide(<Component setLeftSide={setLeftSide} />)
            }
          >
            {title}
          </div>
        )
      )}
    </div>
  );
};

export default RightSideSelector;
