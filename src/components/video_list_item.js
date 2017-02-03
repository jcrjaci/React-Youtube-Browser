import React, { Component } from 'react';
export default class VideoListItem extends Component {
  render() {
    return (
      <div onClick={(video)=>this.props.videoClick(this.props.video)}>
           <image src={this.props.video.snippet.thumbnails.default.url}/>
              {this.props.video.snippet.title}
      </div> 
    );
  }
}
