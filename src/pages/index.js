import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DefaultLeftSide from "../components/leftSide";
import ParticipationList from "../components/lists/ParticipationList";
import RightSideSelector from "../components/rightSideSelector";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.state ={ 
      leftSide: <DefaultLeftSide />,
    rightSide: <ParticipationList setLeftSide={this.setLeftSide} />,
    }
  }

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
          <Col className="left-col main-col">
            <div className="side-container">{leftSide}</div>
          </Col>
          <Col className="right-col main-col">
            <div className="side-container">
              <RightSideSelector
                setLeftSide={this.setLeftSide}
                setRightSide={this.setRightSide}
                SelectedSide={rightSide}
              />
              <div className="float-container">{rightSide}</div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
