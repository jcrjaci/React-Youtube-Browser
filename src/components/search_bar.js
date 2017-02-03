import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.search(term);
  }
  render() {
    return (
      <div className="search-bar">

          <input
            type="text"
            className="search-query form-control"
            placeholder="Search"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
    );
  }
}
