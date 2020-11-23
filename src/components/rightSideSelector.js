import React from "react";
import MoviesList from "./moviesList"

const componentRegistry = {
  Home: MoviesList,
  Other: <div> yoooo </div>,
};

const RightSideSelector = ({ setLeftSide, setRightSide }) => {
  return Object.entries(componentRegistry).map(([title, Component]) => {
    return (
      <div
        key={title}
        onClick={() => setRightSide(<Component setLeftSide={setLeftSide} />)}
      >
        {title}
      </div>
    );
  });
};

export default RightSideSelector;
