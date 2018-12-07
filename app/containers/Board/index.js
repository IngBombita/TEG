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
import './src/style.css';

import * as polygons from './src/polygons.json';
import { pointInsidePolygon } from '../../math/polygon';

const WidthAbsoluteScale = 1064;
const HeightAbsoluteScale = 2160;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relativeScaleWidth: 0,
      relativeScaleHeight: 0,
    };
    this.imgRef = React.createRef();
  }

  onMapClick = elem => {
    const x = elem.pageX;
    const y = elem.pageY;

    this.calculatePositionOnMap(x, y);
  };

  calculatePositionOnMap = (xScreen, yScreen) => {
    const wClient = this.state.relativeScaleWidth;
    const hClient = this.state.relativeScaleHeight;

    const xMap = ((WidthAbsoluteScale / wClient) * xScreen).toFixed(0);
    const yMap = ((HeightAbsoluteScale / hClient) * yScreen).toFixed(0);

    if (pointInsidePolygon({ x: xMap, y: yMap }, polygons.Jujuy))
      console.log('Jujuy seleccionada');
  };

  updateDimensions = () => {
    this.setState({
      relativeScaleWidth: this.imgRef.current.clientWidth,
      relativeScaleHeight: this.imgRef.current.clientHeight,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  onLoad = () => {
    this.setState({
      relativeScaleWidth: this.imgRef.current.clientWidth,
      relativeScaleHeight: this.imgRef.current.clientHeight,
    });
  };

  // ----------------------funcion exclusiva para crear poligonos en el mapa-------------------------------------------------------------------

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
