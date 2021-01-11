import React from "react";
import { Link } from "gatsby";

import { Container, Image } from "react-bootstrap";
import Self from "../images/self.jpg";

import Emoji from "./utils/Emoji";

// Maybe this emoji instead? 🔍
const LeftSide = () => (
  <Container className="default-left">
    <a href="http://cathleenmjia.com/">
      <Image
        width="300"
        height="300"
        className="self-image"
        src={Self}
        roundedCircle
      />
    </a>
    <h1>
      Zachary Kirby
      {/* <Emoji className="ml-2" symbol="🔍" label="hourglass" /> */}
    </h1>
    <p>
      Hi there! My name is Zach, I'm a web developer passionate about using
      technology to make the world a better place.
    </p>
    <p className="text-secondary">
      Off the web I enjoy writing, cinema, learning languages, and music. If
      you're interested in learning a little more
      <span className="ml-1">
        <Link className="about-me-link" to="/writing/about-me">
          look here.
          {/* <Emoji className="ml-1" symbol="😊" label="smile" /> */}
        </Link>
      </span>
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
