import React from "react";

export default className MoviesList extends React.Component {
  componentDidMount() {
    this.props.setLeftSide(this.moviePreview());
  }

  moviePreview() {
    return <div>movies left</div>;
  }

  render() {
    return <div>movies right</div>;
  }
}
