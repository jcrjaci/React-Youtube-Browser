import React, { Component } from 'react';

export default class App extends Component {

  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }

    const videoId = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
        <div className="video-detail">
          <div className="text-left">{this.props.video.snippet.title}</div>
          <div className="text-center">{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}
