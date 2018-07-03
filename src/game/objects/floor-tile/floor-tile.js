import React, { Component } from 'react';
import './floor-tile.css';

class FloorTile extends Component {

  render() {
    return (
      <section className="floor-tile" onClick={() => this.props.onSelect()}>
        <div className="floor-tile__face floor-tile__face--top">
          { this.props.transform }
        </div>
        <div className="floor-tile__face floor-tile__face--left"></div>
        <div className="floor-tile__face floor-tile__face--right"></div>
      </section>
    );
  }
}

export default FloorTile;
