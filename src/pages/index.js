import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DefaultLeftSide from "../components/leftSide";
import DefaultRightSide from "../components/rightSide";
import RightSideSelector from "../components/rightSideSelector";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class HomePage extends React.Component {
  state = {
    leftSide: <DefaultLeftSide />,
    rightSide: <DefaultRightSide />,
  };

  setLeftSide = (leftSide) => {
    return this.setState({ leftSide });
  };

  setRightSide = (rightSide) => {
    return this.setState({ rightSide });
  };

  render() {
    const { leftSide, rightSide } = this.state;

    return (
      <Container fluid>
        <Row className="main-row">
          <Col className="left-col main-col">{leftSide}</Col>
          <Col className="right-col main-col">
            <RightSideSelector
              setLeftSide={this.setLeftSide}
              setRightSide={this.setRightSide}
            />
            {rightSide}
          </Col>
        </Row>
      </Container>
    );
  }
}
