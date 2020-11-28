import React from "react";

import { Container, Image } from "react-bootstrap";
import Self from "../images/self.jpg";

import Emoji from "./Emoji";

// Maybe this emoji instead? 🔍
const LeftSide = () => (
  <Container className="default-left">
    <Image className="self-image" src={Self} roundedCircle />
    <h1>
      Zachary Kirby <Emoji symbol="⏳" label="rocket" />
    </h1>
    <p>
      Hi there! My name is Zach, I'm a Full-Stack developer passionate about
      using technology to make the world a better place.
    </p>
    <p>
      If you're interested in a learning a little more{" "}
      <Emoji symbol="😊" label="smile" />{" "}
    </p>
    <a href="https://drive.google.com/a/berkeley.edu/file/d/1NcNQ4Z8nVl6Nro3bgpwU07zbAE9gFYl7/view?usp=sharing">
      Resume
    </a>
    <a href="https://www.linkedin.com/in/zkirby/">LinkedIn</a>
    <a href="https://github.com/zkirby">Github</a>
    <a href="https://twitter.com/zkirby2020">Twitter</a>
  </Container>
);

export default LeftSide;
