import React, { Component } from 'react';
import './game-view.scss';

// Game Object Modules
import Transform from './objects/object-transform.js';

// Game Objects
import FloorTile from './objects/floor-tile/floor-tile.js';

// Game Data
import Map from './maps/main.json';

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

  renderGrid() {
    var gridElements = Map.data.map((row, rowIndex) => {
      return row.map((column, columnIndex) => {
        if (column) {
          return this.renderFloorTile({ x: rowIndex, y: 0, z: columnIndex })
        }

        return null;
      });
    });

    return gridElements;
  }

  render() {
    return (
      <section className="game-view">
      <div className="game-view__scene">
        <Transform className={ 'camera-transform' } position={ this.state.camera.position }>
          { this.renderGrid() }
        </Transform>
      </div>
      </section>
    );
  }
}

export default GameView;
