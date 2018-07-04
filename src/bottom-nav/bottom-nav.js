import React, { Component } from 'react';
import './bottom-nav.css';

class BottomNav extends Component {
  render() {
    return (
      <nav className="bottom-nav">
        <a className="bottom-nav__link fab fa-github" href="https://github.com/EbekFrostblade" target="_blank"></a>
        <a className="bottom-nav__link fas fa-envelope" href="mailto:bradster.jones@gmail.com" target="_blank"></a>
      </nav>
    );
  }
}

export default BottomNav;
