import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Emoji from "./Emoji";

const LeftSide = () => (
  <Container>
    <h1>
      Zachary Kirby <Emoji symbol="🚀" label="rocket" />
    </h1>
    <p>
      Hi there! My name is Zach, I'm a Full-Stack developer passionate about
      using technology to make the world a better place.
    </p>
    <p>
      If you're interested in a learning a little more{" "}
      <Emoji symbol="😊" label="smile" />{" "}
    </p>
    <div>Resume</div>
    <div>LinkedIn</div>
    <div>Github</div>
    <div>Twitter</div>
  </Container>
);

export default LeftSide;
