/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

import { Container, Col, Row } from "react-bootstrap";

import DefaultLeftSide from "../components/DefaultLeftSide";
import WritingList from "../components/lists/WritingList";
import RightSideSelector from "../components/RightSideSelector";

import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { SHOW_RIGHT_SIDE } from "../components/utils/constants";

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      leftSide: <DefaultLeftSide />,
      rightSide: (
        <WritingList
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

    const leftsideCss = SHOW_RIGHT_SIDE ? "col-7 col-md-6" : "col-12 col-md-12";
    return (
      <Container fluid>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Zachary Kirby</title>
        </Helmet>
        <Row className="main-row">
          <Col className={`left-col main-col ${leftsideCss}`}>
            <div className="side-container">{leftSide}</div>
          </Col>
          {SHOW_RIGHT_SIDE && (
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
          )}
        </Row>
      </Container>
    );
  }
}
