import React, { Component } from 'react';
import './sidebar-nav.css';

class SidebarNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  toggleNav() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    var toggleClass = 'sidebar-nav';
    if (this.state.menuOpen) {
      toggleClass += ' sidebar-nav__opened'
    }

    return (
      <nav className={toggleClass}>
        <div className="sidebar-nav__mask"></div>
        <a className="sidebar-nav__toggle far fa-caret-square-down" onClick={() => this.toggleNav()}></a>
      </nav>
    );
  }
}

export default SidebarNav;
