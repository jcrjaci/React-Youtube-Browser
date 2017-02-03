import React, { Component } from 'react';

export default class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default" id="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">React Youtube browser</a>
          </div>
        </div>
      </nav>
    );
  }
}
