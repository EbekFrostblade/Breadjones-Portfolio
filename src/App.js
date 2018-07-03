import React, { Component } from 'react';
import './App.css';
import GameView from './game/game-view.js';

class App extends Component {
  render() {
    return (
      <section className="portfolio">
        <header className="portfolio-header">
          <div className="portfolio-header__cuboid">

          </div>
          <h1 className="portfolio-header__title">
            Hi, <span className="portfolio-header__name">I&#39;m Brad.</span>
          </h1>
          <h2 className="portfolio-header__tagline">
            I make games, apps, and all sorts of cool stuff.
          </h2>
          <GameView />
          
        </header>
        <div className="centerMarker"></div>
      </section>
    );
  }
}

export default App;
