import React from "react";
import { Container } from "react-bootstrap";

export default class ParticipationList extends React.Component {
  currentCards = [
    {
      title: "Productiv",
      role: "FE Developer",
      dates: "Feb 2020 - Current",
      link: "https://productiv.com/",
      oneLine: "Early hire working on the FE team",
      description: "Something something something.",
    },
  ];
  pastCards = [];

  fillAndSetCardDesc(description) {
    const renderDescription = <div>{description}</div>;
    this.props.setLeftSide(renderDescription);
  }

  renderCard = ({ title, role, dates, link, oneLine, description }) => {
    return (
      <div key={title} className="card" onClick={() => this.fillAndSetCardDesc(description)}>
        <a href={link} target="_blank">
          <div className="title"> {title}</div>
        </a>
        <div className="role"> {role}</div>
        <div className="dates"> {dates}</div>
        <div className="oneLine"> {oneLine} </div>
      </div>
    );
  }

  careerList() {
    return (
      <Container className="participation-list">
        <div className="current-list">{this.currentCards.map(this.renderCard)}</div>
        <div className="past-divider">
          <div className="divider"></div>
          <div className="divider-text">past</div>
          <div className="divider"></div>
        </div>
        <div className="past-list">{this.pastCards.map(this.renderCard)}</div>
      </Container>
    );
  }

  render() {
    return this.careerList();
  }
}
