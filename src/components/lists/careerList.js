import React from "react";

export default class CareerList extends React.Component {
  componentDidMount() {
    this.props.setLeftSide(this.careerCard());
  }

  careerCard() {
    return <div>Career left</div>;
  }

  render() {
    return <div>Career right</div>;
  }
}
