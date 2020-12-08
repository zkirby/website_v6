import React from "react";
import ReactGA from "react-ga";

import { Container, Col, Row } from "react-bootstrap";

import DefaultLeftSide from "../components/DefaultLeftSide";
import ParticipationList from "../components/lists/ParticipationList";
import RightSideSelector from "../components/RightSideSelector";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      leftSide: <DefaultLeftSide />,
      rightSide: (
        <ParticipationList
          setLeftSide={this.setLeftSide}
          resetLeftSide={this.resetLeftSide}
        />
      ),
    };

    // Pls don't hate 4 adding analytics - just wanna see how many people pop by...
    ReactGA.initialize("G-F7J1T9CBZ4");
  }

  resetLeftSide = () => this.setState({ leftSide: <DefaultLeftSide /> });

  setLeftSide = (leftSide) => this.setState({ leftSide });

  setRightSide = (rightSide) => this.setState({ rightSide });

  render() {
    const { leftSide, rightSide } = this.state;

    return (
      <Container fluid>
        <Row className="main-row">
          <Col className="left-col main-col col-7 col-md-6">
            <div className="side-container">{leftSide}</div>
          </Col>
          <Col className="right-col main-col col-6 col-md-6">
            <div className="side-container">
              <RightSideSelector
                setLeftSide={this.setLeftSide}
                resetLeftSide={this.resetLeftSide}
                setRightSide={this.setRightSide}
                SelectedSide={rightSide}
              />
              <div className="float-container overflow-auto">{rightSide}</div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
