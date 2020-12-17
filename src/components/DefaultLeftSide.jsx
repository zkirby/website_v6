import React from "react";

import { Container, Image } from "react-bootstrap";
import Self from "../images/self.jpg";

import Emoji from "./utils/Emoji";

// Maybe this emoji instead? 🔍
const LeftSide = () => (
  <Container className="default-left">
    <a href="http://cathleenmjia.com/">
      <Image className="self-image" src={Self} roundedCircle />
    </a>
    <h1>
      Zachary Kirby 
{' '}
<Emoji class="ml-2" symbol="🔍" label="hourglass" />
    </h1>
    <p>
      Hi there! My name is Zach, I'm a web developer passionate about using
      technology to make the world a better place.
    </p>
    {/* <p className="text-secondary">
      If you're interested in a learning a little more
      <Emoji symbol="😊" label="smile" />
    </p> */}
    <p className="text-secondary">
      Off the web I enjoy writing, talking-watching-writing films, learning
      languages, and practicing social distancing.
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
