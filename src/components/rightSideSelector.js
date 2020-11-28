import React from "react";

// import MoviesList from "./lists/moviesList";
// import ProjectList from "./lists/projectList";
// import WritingsList from "./lists/writingsList";
import ParticipationList from "./lists/ParticipationList";

// Launch when there are at least two tabs
const componentRegistry = {
  // should description be three breakdowns for the different things and then you can filter
  // by what the actual thing is.
  Participation: {
    Component: ParticipationList,
    description: "Involvement | Organizations | ",
  },
  // Projects: {} (Build when I have more projects I want to showcase)
  // Hobbies: {}, (Might consider putting up if the other things are too blank)
  // Writings: { Component: WritingsList, description: "words yo." }, (Put up after having at least 3 articles)
  // Movies: { (Put up after getting list of movies together)
  //   Component: MoviesList,
  //   description:
  //     "I\ve been documenting and rating every movie (and occationally tv show) I've seen since senior year of high school. Here is that list, in its entirety.",
  // },
};

const RightSideSelector = ({ setLeftSide, setRightSide, SelectedSide }) => {
  const rightSides = Object.entries(componentRegistry).map(
    ([title, { Component, description }]) => (
      <div
        className={`ml-2 ${SelectedSide?.name === Component.name ? 'selected-side' : 'not-selected'}`}
        key={title}
        onClick={() =>
          setRightSide(<Component setLeftSide={setLeftSide} />)
        }
      >
        {title}
      </div>
    )
  )

  return (
    <div className="d-flex right-side-selector">
      {rightSides}
    </div>
  );
};

export default RightSideSelector;
