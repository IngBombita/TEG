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
import Button from '@material-ui/core/Button';

import ReactResizeDetector from 'react-resize-detector';
import ImageMapper from 'react-image-mapper';
import React from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';
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

  onClickInMap = event => {
    console.log(event);
  };

  rollAll = () => {
    this.reactDice.rollAll();
  };

  rollDoneCallback = num => {
    console.log(`You rolled a ${num}`);
  };

  render() {
    return (
      <div>
        <div
          onClick={this.onMapClick}
          onKeyDown={() => {}}
          role="button"
          tabIndex="0"
          id="mapId"
        >
          <ReactResizeDetector handleWidth onResize={this.onResize} />
          <ImageMapper
            src={map}
            map={this.map}
            width={this.state.clientWidth}
            imgWidth={WidthAbsoluteScale}
            onClick={this.onClickInMap}
          />
          <Chip color="red" province="Jujuy" />
          <Chip color="blue" province="Salta" />
          <Chip color="magenta" province="Misiones" />
          <Chip color="green" province="Tucuman" />
          <Chip color="black" province="Catamarca" />
          <Chip color="orange" province="Santiago" />

          <Chip color="red" province="Formosa" />
          <Chip color="blue" province="Chaco" />
          <Chip color="magenta" province="SantaFe" />
          <Chip color="green" province="Corrientes" />
          <Chip color="black" province="EntreRios" />
          <Chip color="orange" province="Cordoba" />

          <Chip color="red" province="LaRioja" />
          <Chip color="blue" province="SanJuan" />
          <Chip color="magenta" province="Mendoza" />
          <Chip color="green" province="SanLuis" />
          <Chip color="black" province="LaPampa" />
          <Chip color="orange" province="BuenosAires" />

          <Chip color="red" province="CABA" />
          <Chip color="blue" province="BandaOriental" />
          <Chip color="magenta" province="Neuquen" />
          <Chip color="green" province="RioNegro" />
          <Chip color="black" province="Chubut" />
          <Chip color="orange" province="SantaCruz" />

          <Chip color="red" province="TierraDelFuego" />
          <Chip color="blue" province="IslaGranMalvina" />
          <Chip color="green" province="IslaSoledad" />
        </div>
        <div id="dices">
          <ReactDice
            numDice={4}
            rollDone={this.rollDoneCallback}
            outline
            faceColor="#0001ff"
            dotColor="#000100"
            disableIndividual
            ref={dice => this.reactDice = dice}
          />
          <Button variant="contained" color="primary" onClick={this.rollAll}>
            Tira los dados
          </Button>
        </div>
      </div>
    );
  }
}
