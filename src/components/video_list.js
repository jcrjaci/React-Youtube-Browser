import React, { Component } from 'react';

import VideoListItem from './video_list_item'

export default class VideoList extends Component {

  render() {
    if(!this.props.videos){
      return null;
    }
    return (
      <div >
      {this.props.videos.map(
        (video) =>{
          return (
           <VideoListItem 
              videoClick={this.props.videoClick}
              key={video.etag}
              video={video}/>

          );
        }
      )}
      </div>
    );
  }
}
