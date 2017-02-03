import React, { Component } from 'react';
export default class VideoListItem extends Component {
  render() {
    return (
      <li className="video-list-item media" onClick={(video) => this.props.videoClick(this.props.video)}>
        <image className="d-flex mr-3" src={this.props.video.snippet.thumbnails.default.url} />
        <div className="media-body">
          <h5 className="mt-0 mb-1">
            {this.props.video.snippet.title}
          </h5>
          {this.props.video.snippet.description}
        </div>
      </li>
    );
  }
}
