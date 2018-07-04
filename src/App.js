import React, { Component } from 'react';
import './App.css';
import './third-party/fontawesome/css/all.css';

import BottomNav from './bottom-nav/bottom-nav.js';
import SidebarNav from './sidebar-nav/sidebar-nav.js';
import GameView from './game/game-view.js';

class App extends Component {
  render() {
    return (
      <section className="portfolio">
        <header className="portfolio-header">
          <h1 className="portfolio-header__title">
            Hi, <span className="portfolio-header__name">I&#39;m Brad.</span>
          </h1>
          <h2 className="portfolio-header__tagline">
            Check out some of my work.
          </h2>
        </header>
        <SidebarNav />
        <GameView />
        <BottomNav />
      </section>
    );
  }
}

export default App;
