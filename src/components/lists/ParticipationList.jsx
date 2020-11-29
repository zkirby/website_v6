import React from "react";
import { Container, Card } from "react-bootstrap";

// import Markdown from "../utils/Markdown";

// import pdMd from "../../writings/productiv.md";

const CARD_TYPES = {
  CAREER: "CAREER",
  ORGANIZATION: "ORGANIZATION",
  ENTREPRENEURIAL: "ENTREPRENEURIAL",
  AWARD: "AWARD",
  WEBDEV: "WEBDEV",
  FILM: "FILM",
  OTHER: "OTHER",
  ACADEMIA: "ACADEMIA",
  COMMUNITY_SERVICE: "COMMUNITY SERVICE",
  POLITICS: "POLITICS",
};

const CURRENT_CARDS = [
  {
    title: "Productiv",
    type: [CARD_TYPES.CAREER, CARD_TYPES.WEBDEV],
    role: "FE Developer",
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    // mdLink: pdMd,
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
];
const PAST_CARDS = [
  {
    title: "Gusto",
    role: "Full Stack Intern",
    type: [CARD_TYPES.CAREER, CARD_TYPES.WEBDEV],
    dates: "May 2019 - Aug 2019",
    link: "https://gusto.com/",
    oneLine: "Intern working on Time tracking",
    description: "other thing",
  },
  {
    title: "Facebook",
    role: "FE Developer",
    type: [CARD_TYPES.CAREER, CARD_TYPES.WEBDEV],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "KP Fellows",
    role: "FE Developer",
    type: [CARD_TYPES.CAREER, CARD_TYPES.ENTREPRENEURIAL],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "Cal Hacks",
    role: "FE Developer",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.ENTREPRENEURIAL],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "ZS Blockchain",
    role: "FE Developer",
    type: [CARD_TYPES.CAREER, CARD_TYPES.ENTREPRENEURIAL],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "Glynn Capital",
    role: "FE Developer",
    type: [CARD_TYPES.ENTREPRENEURIAL],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "Web Design DeCal",
    role: "FE Developer",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.WEBDEV, CARD_TYPES.ACADEMIA],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "Kairos",
    role: "FE Developer",
    type: [CARD_TYPES.ENTREPRENEURIAL],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "Accel Scholars",
    role: "FE Developer",
    type: [
      CARD_TYPES.ORGANIZATION,
      CARD_TYPES.ENTREPRENEURIAL,
      CARD_TYPES.AWARD,
    ],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "VR @ Berkeley",
    role: "FE Developer",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.FILM],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "UPE",
    role: "FE Developer",
    type: [CARD_TYPES.AWARD, CARD_TYPES.ACADEMIA],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "React DeCal",
    role: "FE Developer",
    type: [CARD_TYPES.WEBDEV, CARD_TYPES.ACADEMIA],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "ASUC",
    role: "FE Developer",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.POLITICS],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "Regents And Chancellor's Scholarship Association",
    role: "FE Developer",
    type: [CARD_TYPES.AWARD, CARD_TYPES.ACADEMIA, CARD_TYPES.ORGANIZATION],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "Gymnastics",
    role: "FE Developer",
    type: [CARD_TYPES.OTHER],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "ANova",
    role: "FE Developer",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.COMMUNITY_SERVICE],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "Cinebears",
    role: "FE Developer",
    type: [CARD_TYPES.FILM, CARD_TYPES.WEBDEV, CARD_TYPES.ORGANIZATION],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "Student Technology Fund",
    role: "FE Developer",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.POLITICS],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
  {
    title: "Professor Hearst's HCI/NLP Lab",
    role: "FE Developer",
    type: [CARD_TYPES.ACADEMIA, CARD_TYPES.WEBDEV],
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    oneLine: "Early hire working on the FE team",
    description: "Something something something.",
  },
];

export default class ParticipationList extends React.Component {
  constructor() {
    super();

    this.state = {
      cardSelection: undefined,
      filters: [],
    };
  }

  setCardPreview(description) {
    const { setLeftSide } = this.props;

    setLeftSide(<div>{description}</div>);
    this.setState({
      cardSelection: description,
    });
  }

  toggleFilter(filter) {
    this.setState((prevState) => {
      const prevFilters = prevState.filters || [];
      const filterIndex = prevFilters.indexOf(filter);

      if (filterIndex > -1) {
        prevFilters.splice(filterIndex, 1);
        return { filters: prevFilters };
      }
      return { filters: [...prevFilters, filter] };
    });
  }

  clearPreview() {
    const { resetLeftSide } = this.props;

    resetLeftSide();
    this.setState({
      cardSelection: undefined,
    });
  }

  renderCard({ title, role, dates, link, oneLine, description, mdLink }) {
    const { cardSelection } = this.state;
    const togglePreview = () => {
      if (cardSelection === description) this.clearPreview();
      else this.setCardPreview(description, mdLink);
    };

    return (
      <Card
        key={title}
        onClick={togglePreview}
        className={`cursor-pointer mb-4 card-selection ${
          cardSelection === description ? "text-white bg-dark" : ""
        }`}
      >
        <Card.Body>
          <Card.Title>
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </Card.Title>
          <Card.Subtitle className="role text-muted">{role}</Card.Subtitle>
          <Card.Subtitle className="dates mt-1 text-muted">
            {dates}
          </Card.Subtitle>
          <Card.Text className="oneLine mt-3">{oneLine}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  renderCareerList() {
    const { filters } = this.state;
    const filteredCurrentCards = !filters.length
      ? CURRENT_CARDS
      : CURRENT_CARDS.filter(({ type }) =>
          type?.some((value) => filters.includes(value))
        );
    const filteredPastCards = !filters.length
      ? PAST_CARDS
      : PAST_CARDS.filter(({ type }) =>
          type?.some((value) => filters.includes(value))
        );

    return (
      <Container className="participation-list">
        <div className="d-flex flex-wrap mt-2 pill-container">
          {Object.values(CARD_TYPES).map((title) => (
            <div
              className={`pill ${filters.includes(title) ? "on-pill" : ""}`}
              onClick={() => this.toggleFilter(title)}
            >
              {title.toLocaleLowerCase()}
            </div>
          ))}
        </div>
        {filteredCurrentCards.length ? (
          <div className="current-list pt-3">
            {filteredCurrentCards.map(this.renderCard.bind(this))}
          </div>
        ) : (
          ""
        )}
        {filteredCurrentCards.length ? (
          <div className="past-divider d-flex align-items-center">
            <div className="divider" />
            <div className="divider-text">past</div>
            <div className="divider" />
          </div>
        ) : (
          ""
        )}
        <div className="past-list mt-4">
          {filteredPastCards.map(this.renderCard.bind(this))}
        </div>
      </Container>
    );
  }

  render() {
    return this.renderCareerList();
  }
}
