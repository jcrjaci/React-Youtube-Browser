import React, { Component } from 'react';

export default class App extends Component {

  render() {
    if (!this.props.video) {
      return  <div>Loading...</div>;
    }
    
    const videoId = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div>
        <div>
          <iframe src={url} />
        </div>
        <div>{this.props.video.snippet.title}</div>
        <div>{this.props.video.snippet.description}</div>
      </div>
    );
  }
}
