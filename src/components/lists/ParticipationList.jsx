/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-return-assign */
import React from "react";
import ReactGA from "react-ga";
import { Container, Card } from "react-bootstrap";
import {
  FaGraduationCap,
  FaCoffee,
  FaUsers,
  FaLightbulb,
  FaGlobeAmericas,
  FaMedal,
  FaQuestion,
  FaLaptopCode,
  FaLandmark,
} from "react-icons/fa";
import { BsFilm } from "react-icons/bs";

import { TRACKING_EVENT, COLOR_POOL } from "../utils/constants";

// import Markdown from "../utils/Markdown";

// import pdMd from "../../writings/productiv.md";

const CARD_TYPES = {
  CAREER: "career",
  ORGANIZATION: "organization",
  ENTREPRENEURIAL: "entrepreneurial",
  AWARD: "award",
  WEBDEV: "web dev",
  FILM: "film",
  OTHER: "other",
  ACADEMIA: "academia",
  COMMUNITY_SERVICE: "community service",
  POLITICS: "politics",
};

const CARD_ICONS = {
  [CARD_TYPES.CAREER]: FaCoffee,
  [CARD_TYPES.ORGANIZATION]: FaUsers,
  [CARD_TYPES.ENTREPRENEURIAL]: FaLightbulb,
  [CARD_TYPES.AWARD]: FaMedal,
  [CARD_TYPES.WEBDEV]: FaLaptopCode,
  [CARD_TYPES.FILM]: BsFilm,
  [CARD_TYPES.OTHER]: FaQuestion,
  [CARD_TYPES.ACADEMIA]: FaGraduationCap,
  [CARD_TYPES.COMMUNITY_SERVICE]: FaGlobeAmericas,
  [CARD_TYPES.POLITICS]: FaLandmark,
};

const CARD_CATEGORIES = {
  PROF_LIFE: {
    label: "professional life",
    types: [
      CARD_TYPES.CAREER,
      CARD_TYPES.ENTREPRENEURIAL,
      CARD_TYPES.AWARD,
      CARD_TYPES.ACADEMIA,
      CARD_TYPES.WEBDEV,
    ],
  },
  PERF_LIFE: {
    label: "personal life",
    types: [
      CARD_TYPES.ORGANIZATION,
      CARD_TYPES.FILM,
      CARD_TYPES.OTHER,
      CARD_TYPES.COMMUNITY_SERVICE,
      CARD_TYPES.POLITICS,
    ],
  },
};

const TIMES = {
  SEM_SENIOR_YEAR: "Aug 2019 - May 2020",
  SUMMER_JUNIOR_YEAR: "May 2019 - Aug 2019",
  SEM_JUNIOR_YEAR: "Aug 2018 - May 2019",
  SUMMER_SOUPH_YEAR: "May 2018 - Aug 2018",
  SEM_SOUPH_YEAR: "Aug 2017 - May 2018",
};

const CURRENT_CARDS = [
  {
    title: "Productiv",
    type: [CARD_TYPES.CAREER, CARD_TYPES.WEBDEV],
    role: "FE Developer",
    dates: "Feb 2020 - Current",
    link: "https://productiv.com/",
    // mdLink: pdMd,
    oneLine:
      "Accel backed Series B startup focused on Saas Management. I'm currently an early hire working on the FE team.",
    description: "Something something something.",
  },
];

const PAST_CARDS = [
  {
    title: "Gusto",
    role: "Full Stack Intern",
    type: [CARD_TYPES.CAREER, CARD_TYPES.WEBDEV],
    dates: TIMES.SUMMER_JUNIOR_YEAR,
    link: "https://gusto.com/",
    oneLine:
      "Intern, worked on Time tracking. Awesome company, check them out :)",
    description: "other thing",
  },
  {
    title: "KP Fellows",
    role: "Fellow",
    type: [CARD_TYPES.CAREER, CARD_TYPES.ENTREPRENEURIAL],
    dates: TIMES.SUMMER_JUNIOR_YEAR,
    link: "https://fellows.kleinerperkins.com/",
    oneLine:
      "Fellowship hosted by notable VC Kleiner Perkins. Met Cool people, cool founders, cool VCs. All around a pretty cool time.",
    description: "Something something something.",
  },
  {
    title: "Cal Hacks",
    role: "Executive Director",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.ENTREPRENEURIAL],
    dates: "Jan 2017 - May 2019",
    link: "https://calhacks.io/",
    oneLine:
      "Lead director for the 5.0 team. Managed the biggest budget for any Cal Hacks ever ($300k+) and shocked the world with game changing bear-face on socks.",
    description: "Something something something.",
  },
  {
    title: "Accel Scholars",
    role: "Scholar",
    type: [
      CARD_TYPES.ORGANIZATION,
      CARD_TYPES.ENTREPRENEURIAL,
      CARD_TYPES.AWARD,
    ],
    dates: TIMES.SEM_SOUPH_YEAR,
    link:
      "https://techcrunch.com/2017/11/01/accel-launches-uc-berkeley-mentorship-program/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAJ0h4xfiCPAogIKNrFY7NvBWbsw2VCw4y9IzjyrUxY7pHb-K0doTtKrK8ceFEnNHf2M-TUauNoXAasNq0ROsZMHBHDRi1htbnUA7EfskYjbr2Iwf2oqEMTPQrSNhxtJnsueZapie6jKJPe4AjbfOaH80qMgoVTy2OONN8NiPPQGJ",
    oneLine:
      "Cal based entrepreneurial program hosted by notable VC Accel. Was part of the inaugural class",
    description: "Something something something.",
  },
  {
    title: "Facebook",
    role: "FE Intern",
    type: [CARD_TYPES.CAREER, CARD_TYPES.WEBDEV],
    dates: TIMES.SUMMER_SOUPH_YEAR,
    link: "https://engineering.fb.com/",
    oneLine:
      "Worked in Ads FE Infra (same team as the guy that made React - Jordan Walke - so that was cool).",
    description: "Something something something.",
  },
  {
    title: "Student Technology Fund",
    role: "Council Member",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.POLITICS],
    dates: TIMES.SEM_SENIOR_YEAR,
    link: "https://techfund.berkeley.edu/about/committee-and-staff",
    oneLine:
      "The STF is a multi-million dollar fund derived from student tuition and created to endorse and fund student based technology endeavors ranging from Hackathons to upgrading the technology of under-resourced communities",
    description: "Something something something.",
  },
  {
    title: "Professor Hearst's HCI/NLP Lab",
    role: "Research Assistant to Dr. Andrew Head",
    type: [CARD_TYPES.ACADEMIA, CARD_TYPES.WEBDEV],
    dates: TIMES.SEM_SENIOR_YEAR,
    link: "https://scholarphi.org/",
    oneLine:
      "As part of the ScholarPhi team I worked on a myriad of tasks including spearheading much of the FE feature development, undergrad UX research, and custom scripting a Tobii 4C eye-tracker for usability",
    description: "Something something something.",
  },
  {
    title: "Glynn Capital",
    role: "University Investment Fellow",
    type: [CARD_TYPES.ENTREPRENEURIAL],
    dates: "Oct 2018 - May 2019",
    link: "https://www.glynncapital.com/",
    oneLine:
      "Notable late stage VC Firm. Was part of their inaugural investment fellows class. Program consisted of pitching popular later stage startups used by students on campus to VCs at the firm",
    description: "Something something something.",
  },
  {
    title: "Web Design DeCal",
    role: "Head Instructor",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.WEBDEV, CARD_TYPES.ACADEMIA],
    dates: "Jan 2017 - May 2018",
    link: "https://wdd.io/",
    oneLine:
      "UC Berkeley's premier FE focused student-lead class. Was head instructor focused primarily on JavaScript and JQuery curriculum and lectures. Loved to teach, was a highlight of college for me.",
    description: "Something something something.",
  },
  {
    title: "Regents And Chancellor's Scholarship Association",
    role: "RHOP Member",
    type: [CARD_TYPES.AWARD, CARD_TYPES.ACADEMIA, CARD_TYPES.ORGANIZATION],
    dates: "Aug 2016 - May 2020",
    link: "https://rcsa.berkeley.edu/",
    oneLine:
      "RCSA is the essentially the UCs systems token way of luring talent (read: people good at writing essays and filling out applications) away from other prestigious schools.",
    description: "Something something something.",
  },
  {
    title: "ASUC",
    role: "Chief of Staff",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.POLITICS],
    dates: "Aug 2018 - May 2020",
    link: "https://asuc.org/",
    oneLine:
      "I held many roles during my roughly ~2 years in the ASUC, most notably the Chief of Staff for the Tech Senator.",
    description: "Something something something.",
  },
  {
    title: "Kairos",
    role: "Fellow",
    type: [CARD_TYPES.ENTREPRENEURIAL],
    dates: "Aug 2018 - May 2020",
    link: "https://www.kairosfellows.org/",
    oneLine:
      "Kairos was, at the time, *the* place for tech-entrepreneurial minded folks at Berkeley to gather, share ideas, and talk.",
    description: "Something something something.",
  },
  {
    title: "ANova",
    role: "Curriculum Chair",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.COMMUNITY_SERVICE],
    dates: "Jan 2017 - May 2020",
    link: "https://www.berkeleyanova.org/",
    oneLine:
      "ANova is an organization dedicated to bringing technology awareness and education to local underserved youth in the Bay Area.",
    description: "Something something something.",
  },
  {
    title: "Cinebears",
    role: "Web Chair",
    type: [CARD_TYPES.FILM, CARD_TYPES.WEBDEV, CARD_TYPES.ORGANIZATION],
    dates: TIMES.SEM_SENIOR_YEAR,
    link: "https://cinebears.berkeley.edu/",
    oneLine:
      "Cinebears is the premier club at Berkeley for all things film related. During my time at Cinebears I created and maintained the organizations first personal website.",
    description: "Something something something.",
  },
  {
    title: "ZS Blockchain",
    role: "Partner",
    type: [CARD_TYPES.CAREER, CARD_TYPES.ENTREPRENEURIAL],
    dates: TIMES.SEM_SOUPH_YEAR,
    link: "https://www.crunchbase.com/organization/zs-blockchain",
    oneLine: "First (and last) Blockchain venture leading event coordination.",
    description: "Something something something.",
  },
  {
    title: "UPE",
    role: "Member",
    type: [CARD_TYPES.AWARD, CARD_TYPES.ACADEMIA],
    dates: "April 2018 - May 2020",
    link: "https://upe.berkeley.edu/",
    oneLine:
      "UC Berkeley's CS Honor Society. Was on the social committee funny enough.",
    description: "Something something something.",
  },
  {
    title: "React DeCal",
    role: "Founding Member",
    type: [CARD_TYPES.WEBDEV, CARD_TYPES.ACADEMIA],
    dates: TIMES.SEM_JUNIOR_YEAR,
    link: "https://reactdecal.org/",
    oneLine:
      "Founding member to UC Berkeley's one and only React class. I specialized mostly in JavaScript curriculum",
    description: "Something something something.",
  },
  {
    title: "VR @ Berkeley",
    role: "360 VR Film Team",
    type: [CARD_TYPES.ORGANIZATION, CARD_TYPES.FILM],
    dates: TIMES.SEM_SOUPH_YEAR,
    link: "https://xr.berkeley.edu/",
    oneLine:
      "Part of the 360 film team where we experimented with the emerging medium.",
    description: "Something something something.",
  },
  {
    title: "Gymnastics",
    role: "Competitor",
    type: [CARD_TYPES.OTHER],
    dates: "Year 2 - Year 13",
    link: "http://www.meetscoresonline.com/Athlete.MyScores/221031",
    oneLine:
      "I was a competitive gymnast for most of my early life. From gymnastics I learned drive, determination, and how to do cool tricks on trampolines.",
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

    this.colorMap = Object.values(CARD_TYPES).reduce((cMap, key, i) => {
      cMap[key] = COLOR_POOL[i % (COLOR_POOL.length + 1)];
      return cMap;
    }, {});
  }

  setCardPreview(description) {
    // TODO: Turn off card selection until markdown is enabled
    // const { setLeftSide } = this.props;

    // setLeftSide(<div>{description}</div>);
    this.setState({
      cardSelection: description,
    });
  }

  createTextPill = (title) => {
    const { filters } = this.state;
    const { colorMap } = this;
    const styleObj = filters.includes(title)
      ? { opacity: 1, background: colorMap[title] }
      : {};
    const Icon = CARD_ICONS[title];

    return <Icon key={title} style={styleObj} className="font-icon" />;
  };

  toggleFilter(filter) {
    this.setState((prevState) => {
      const prevFilters = prevState.filters || [];
      const filterIndex = prevFilters.indexOf(filter);

      if (filterIndex > -1) {
        prevFilters.splice(filterIndex, 1);
        return { filters: prevFilters };
      }
      ReactGA.event({
        category: TRACKING_EVENT.LIST_FILTER,
        action: filter,
      });
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

  renderCard({ title, role, type, dates, link, oneLine, description, mdLink }) {
    const { cardSelection } = this.state;
    const { createTextPill } = this;
    const togglePreview = () => {
      window.open(link);
      //   if (cardSelection === description) this.clearPreview();
      //   else this.setCardPreview(description, mdLink);
    };

    // TODO: When markdown aspects are enabled,
    // turn on card selection
    return (
      <Card
        key={title}
        onClick={togglePreview}
        className={`cursor-pointer mb-4 card-selection ${
          cardSelection === description ? "text-white bg-dark" : ""
        }`}
      >
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>
                {/* <a href={link} target="_blank" rel="noreferrer"> */}
                <h3>{title}</h3>
                {/* </a> */}
              </Card.Title>
              <Card.Subtitle className="role text-muted">{role}</Card.Subtitle>
              <Card.Subtitle className="dates mt-1 text-muted">
                {dates}
              </Card.Subtitle>
            </div>
            <div className="text-pills">
              {type?.map(createTextPill.bind(this))}
            </div>
          </div>
          <Card.Text className="oneLine mt-3">{oneLine}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  renderCareerList() {
    const { filters } = this.state;
    const { colorMap } = this;
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
          {Object.values(CARD_TYPES).map((title) => {
            const isOnPill = filters.includes(title);
            const styleObj = isOnPill
              ? { backgroundColor: colorMap[title] }
              : {};
            return (
              <div
                key={title}
                className={`pill ${isOnPill ? "on-pill" : ""}`}
                style={styleObj}
                onClick={() => this.toggleFilter(title)}
              >
                {title}
              </div>
            );
          })}
        </div>
        {/* <div className="fade-bar" /> */}
        <div className="card-lists">
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
        </div>
      </Container>
    );
  }

  render() {
    return this.renderCareerList();
  }
}
