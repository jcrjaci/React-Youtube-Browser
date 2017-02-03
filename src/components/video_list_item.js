import React, { Component } from 'react';
export default class VideoListItem extends Component {
  render() {
    return (
      <li className="video-list-item video-detail media" onClick={(video) => this.props.videoClick(this.props.video)}>
        <div className="media-left">
        <image className="d-flex mr-3" src={this.props.video.snippet.thumbnails.default.url} />
        </div>
        <div className="media-body">
           <div className="media-heading">
            {this.props.video.snippet.title}
          </div>
        </div>
      </li>
    );
  }
}
