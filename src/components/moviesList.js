import React from "react";

export default class MoviesList extends React.Component {
  componentDidMount() {
    this.props.setLeftSide(this.moviePreview());
  }

  moviePreview() {
    return <div>This is a preview</div>
  }
  
  render() {
    return <div>This is the right side</div>
  }
}

