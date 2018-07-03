import React, { Component } from 'react';
import './game-view.css';

// Game Object Modules
import Transform from './objects/object-transform.js';

// Game Objects
import FloorTile from './objects/floor-tile/floor-tile.js';

class GameView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      camera: {
        position: {
          x: 0,
          y: 0,
          z: 0
        },
        rotation: {
          x: -30,
          y: -45,
          z: 0
        }
      }
    }
  }

  renderFloorTile(position) {
    const cameraPosition = {
      x: position.x * -100,
      y: position.y * -100,
      z: position.z * -100
    }

    const gamePosition = {
      x: position.x * 100,
      y: position.y * 100,
      z: position.z * 100
    }

    return (
      <Transform position={ gamePosition } >
        <FloorTile onSelect={
          () => this.moveToPosition(cameraPosition)
        } />
      </Transform>
    )
  }

  moveToPosition(position) {
    this.setState({
      camera: {
        position: position
      }
    })
  }

  render() {
    return (
      <section className="game-view">
      <div className="game-view__scene">
        <Transform className={ 'camera-transform' } position={ this.state.camera.position }>
          {this.renderFloorTile({ x: 2, y: 0, z: 0 }) }
          {this.renderFloorTile({ x: 1, y: 0, z: 0 }) }
          {this.renderFloorTile({ x: 0, y: 0, z: 0 }) }
          {this.renderFloorTile({ x: 0, y: 0, z: 1 }) }
        </Transform>
      </div>
      </section>
    );
  }
}

export default GameView;
