import React from "react";

// import ParticipationList from "./lists/ParticipationList";
import WritingList from "./lists/WritingList";

// Launch when there are at least two tabs
const componentRegistry = {
  // should description be three breakdowns for the different things and then you can filter
  // by what the actual thing is.
  Writings: { Component: WritingList, description: "words yo." },
  // participation: {
  //   Component: ParticipationList,
  //   description: "Involvement | Organizations | ",
  // },
  // Projects: {} (Build when I have more projects I want to showcase)
  // Hobbies: {}, (Might consider putting up if the other things are too blank)
  // Movies: { (Put up after getting list of movies together)
  //   Component: MoviesList,
  //   description:
  //     "I\ve been documenting and rating every movie (and occationally tv show) I've seen since senior year of high school. Here is that list, in its entirety.",
  // },
};

const RightSideSelector = ({
  setLeftSide,
  resetLeftSide,
  setRightSide,
  SelectedSide,
}) => {
  const rightSides = Object.entries(componentRegistry).map(
    ([title, { Component, description }]) => (
      <div
        className={`mr-2 cursor-pointer ${
          SelectedSide?.name === Component.name
            ? "selected-side"
            : "not-selected"
        }`}
        key={title}
        onClick={() =>
          setRightSide(
            <Component
              setLeftSide={setLeftSide}
              resetLeftSide={resetLeftSide}
            />
          )}
      >
        {title.toLocaleLowerCase()}
      </div>
    )
  );

  return rightSides.length > 1 ? (
    <div className="d-flex mb-3 right-side-selector">{rightSides}</div>
  ) : (
    <div />
  );
};

export default RightSideSelector;
