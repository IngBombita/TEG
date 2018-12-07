/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import map from './src/map.png';
//import './src/style.css'; 
//comente este estilo ya que ahora tenemos que mapear las provincias en nuestra escala que es el tamaño por default de la imagen 

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgWidth: 0,
      imgHeight: 0,
      xScreen: 0,
      yScreen:0
    };
    this.imgRef = React.createRef();
  }

  onMapClick = elem => {
    const x = elem.pageX;
    const y = elem.pageY;
    console.log('Mouse pos: (', x, ',', y, ')');
    this.setState({
      xScreen: x,
      yScreen: y
    })
  };

  updateDimensions = () => {
    this.setState({
      imgWidth: this.imgRef.current.clientWidth,
      imgHeight: this.imgRef.current.clientHeight,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  onLoad = () => {
    this.setState({
      imgWidth: this.imgRef.current.clientWidth,
      imgHeight: this.imgRef.current.clientHeight,
    });
  };

  render() {
    return (
      <div
        onClick={this.onMapClick}
        onKeyDown={() => {}}
        role="button"
        tabIndex="0"
        id="mapId"
      >
        <img
          src={map}
          ref={this.imgRef}
          onLoad={this.onLoad}
          alt="board"
          className="map"
        />
      </div>
    );
  }
}
