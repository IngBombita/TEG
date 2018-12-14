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

import ReactResizeDetector from 'react-resize-detector';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import map from './src/map.png';
import './src/style.css';
import * as Noroeste from './src/polygons/Noroeste.json';
import * as Noreste from './src/polygons/Noreste.json';
import * as Centro from './src/polygons/Centro.json';
import * as Cuyo from './src/polygons/Cuyo.json';
import * as Patagonia from './src/polygons/Patagonia.json';
import Chip from '../../components/Chip/index';

const WidthAbsoluteScale = 1064;
const HeightAbsoluteScale = 2160;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.areas = [];
    this.areas.push(Noroeste.default);
    this.areas.push(Noreste.default);
    this.areas.push(Centro.default);
    this.areas.push(Cuyo.default);
    this.areas.push(Patagonia.default);

    this.state = { clientWidth: 0 };

    this.provinces = {};
    for (let i = 0; i < this.areas.length; i += 1) {
      this.provinces = { ...this.provinces, ...this.areas[i] };
    }

    this.provinces = Object.entries(this.provinces);

    this.map = {
      name: 'Provinces',
      areas: [],
    };
    for (let index = 0; index < this.provinces.length; index += 1) {
      const province = this.provinces[index];
      const objProvince = {
        name: province[0],
        shape: 'poly',
        coords: province[1],
      };
      this.map.areas[index] = objProvince;
    }
  }

  onResize = width => {
    this.setState({ clientWidth: width });
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

        <ReactResizeDetector handleWidth onResize={this.onResize} />
        <ImageMapper
          src={map}
          map={this.map}
          width={this.state.clientWidth}
          imgWidth={WidthAbsoluteScale}
        />
      </div>
    );
  }
}
