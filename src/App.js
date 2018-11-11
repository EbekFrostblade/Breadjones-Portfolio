import React, { Component } from 'react';
import './App.scss';
import './third-party/fontawesome/css/all.css';

import BottomNav from './bottom-nav/bottom-nav.js';
import SidebarNav from './sidebar-nav/sidebar-nav.js';
import GameView from './game/game-view.js';

import Welcome from './welcome/welcome.js';
import Skills from './skills/skills.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <section className="portfolio">
          <GameView />
          <BottomNav />
          <Route exact path="/" component={Welcome} />
        </section>
      </Router>
    );
  }
}

export default App;
