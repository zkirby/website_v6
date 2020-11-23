import React from "react";

const componentRegistry = {
  Home: <div></div>,
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
