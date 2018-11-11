import React, { Component } from 'react';
import './welcome.scss';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <section className="portfolio-header">
        <h1 className="portfolio-header__title">
          Hi, <span className="portfolio-header__name">I&#39;m Brad.</span>
        </h1>
        <h2 className="portfolio-header__tagline">
          Thanks for checking our my portfolio. More to come soon!
        </h2>
      </section>
    );
  }
}

export default Welcome;
