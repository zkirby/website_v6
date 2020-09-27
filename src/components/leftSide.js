import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LeftSide = (displayMode) => (
  <Container>
    <h1>Zachary Kirby</h1>
    <p>a little about me, etc, etc laurem ipsum</p>
    <Container>
      <Row>
        <Col>some link</Col>
      </Row>
    </Container>
  </Container>
);

export default LeftSide;
