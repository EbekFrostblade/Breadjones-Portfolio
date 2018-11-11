import React, { Component } from 'react';
import './sidebar-nav.css';

import { Link } from 'react-router-dom';

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
        <Link className="sidebar-nav__item" to='/' onClick={() => this.toggleNav()}>
          <span className="sidebar-nav__item-label">
            Explore
          </span>
        </Link>
        <Link className="sidebar-nav__item" to='/skills' onClick={() => this.toggleNav()}>
          <span className="sidebar-nav__item-label">
            Skills
          </span>
        </Link>
        <div className="sidebar-nav__item">
          <span className="sidebar-nav__item-label">
            Projects
          </span>
        </div>
        <div className="sidebar-nav__divider"></div>
        <div className="sidebar-nav__item">
          <span className="sidebar-nav__item-label">
            Fun Stuff
          </span>
        </div>
        <div className="sidebar-nav__mask"></div>
        <a className="sidebar-nav__toggle far fa-caret-square-down" onClick={() => this.toggleNav()}></a>
      </nav>
    );
  }
}

export default SidebarNav;
