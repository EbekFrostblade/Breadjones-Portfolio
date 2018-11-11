import React, { Component } from 'react';
import './object-transform.scss';

class ObjectTransform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: props.position || { x: 0, y: 0, z: 0 },
      rotation: props.rotation || { x: 0, y: 0, z: 0 }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      position: nextProps.position
    });  
  }

  buildTransform() {
    var transform = '';
    transform += 'translate3d(' + this.state.position.x + 'px, ' + this.state.position.y + 'px, ' + this.state.position.z + 'px)';
    transform += ' rotateX(' + this.state.rotation.x + 'deg) rotateY(' + this.state.rotation.y + 'deg) rotateZ(' + this.state.rotation.z + 'deg)'

    return transform;
  }

  render() {
    var transformStyle = {
      transform: this.buildTransform(),
      transformStyle: 'preserve-3d'
    };

    return (
      <section className={ "object-transform " + this.props.className } style={transformStyle}>
        {this.props.children}
      </section>
    );
  }
}

export default ObjectTransform;
