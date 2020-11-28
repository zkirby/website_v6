import React from "react";

export default className WritingList extends React.Component {
  componentDidMount() {
    this.props.setLeftSide(this.moviePreview());
  }

  moviePreview() {
    return <div>writings left</div>;
  }

  render() {
    return <div>writings right</div>;
  }
}
