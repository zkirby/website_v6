import React from "react";

export default class MoviesList extends React.Component {
  componentDidMount() {
    this.props.setLeftSide(this.moviePreview());
  }

  moviePreview() {
    return <div>projects left</div>;
  }

  render() {
    return <div>projects right</div>;
  }
}
