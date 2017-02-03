import React, { Component } from 'react';
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyBEu2UzFh9yG4T4o1Crmvm3i3MiRRasxus';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('ronaldo')
  }

  videoSearch(term) {
    console.log(term)
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      console.log(videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });

    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar search={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} videoClick={(video) => {
          this.setState({ selectedVideo: video })
        } } />
      </div>
    );
  }
}
