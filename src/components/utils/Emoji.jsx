import React from "react";

const Emoji = ({ label, symbol, className }) => (
  <span
    className={`emoji ${className}`}
    role="img"
    aria-label={label || ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);

export default Emoji;
