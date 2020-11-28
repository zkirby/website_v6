import React from "react";

export default className MoviesList extends React.Component {
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
