import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSide from "../components/leftSide";
import RightSide from "../components/rightSide";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => (
  <Container fluid>
    <Row className="main-row">
      <Col className="main-col">
        <LeftSide />
      </Col>
      <Col className="main-col">
        <RightSide />
      </Col>
    </Row>
  </Container>
);

export default IndexPage;
