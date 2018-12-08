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

import Chip from '../../components/Chip';

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
        <Chip color="red" province="Jujuy" />
        <Chip color="blue" province="Salta" />
        <Chip color="yellow" province="Misiones" />
        <Chip color="green" province="Tucumán" />
        <Chip color="violet" province="Catamarca" />
        <Chip color="orange" province="Santiago" />

        <Chip color="red" province="Formosa" />
        <Chip color="blue" province="Chaco" />
        <Chip color="yellow" province="SantaFé" />
        <Chip color="green" province="Corrientes" />
        <Chip color="violet" province="EntreRíos" />
        <Chip color="orange" province="Córdoba" />

        <Chip color="red" province="LaRioja" />
        <Chip color="blue" province="SanJuan" />
        <Chip color="yellow" province="Mendoza" />
        <Chip color="green" province="SanLuis" />
        <Chip color="violet" province="LaPampa" />
        <Chip color="orange" province="BuenosAires" />

        <Chip color="red" province="CABA" />
        <Chip color="blue" province="BandaOriental" />
        <Chip color="yellow" province="Neuquén" />
        <Chip color="green" province="RíoNegro" />
        <Chip color="violet" province="Chubut" />
        <Chip color="orange" province="SantaCruz" />

        <Chip color="red" province="TierraDelFuego" />
        <Chip color="blue" province="IslasMalvinas" />

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
