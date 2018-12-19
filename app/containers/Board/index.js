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
import MyCards from '../../components/MyCards';
import 'react-dice-complete/dist/react-dice-complete.css';
import map from './src/map.png';
import './src/style.css';
import * as Noroeste from './src/polygons/Noroeste.json';
import * as Noreste from './src/polygons/Noreste.json';
import * as Centro from './src/polygons/Centro.json';
import * as Cuyo from './src/polygons/Cuyo.json';
import * as Patagonia from './src/polygons/Patagonia.json';
import Chip from '../../components/Chip/index';
import Objectives from '../../components/Objectives/index';
import RenderDice from '../../components/RenderDice';

const WidthAbsoluteScale = 1064;
const borderSize = 7;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { clientWidth: 0, availableArmies: 3, color: 'BLACK' };

    this.objPrueba = {
      cards: [
        { name: 'cordoba', type: 'tank' },
        { name: 'mendoza', type: 'hot-air-balloon' },
        { name: 'salta', type: 'boat' },
        { name: 'tucuman', type: 'boat' },
        { name: 'tucuman', type: 'boat' },
        { name: 'tucuman', type: 'boat' },
        { name: 'cordoba', type: 'tank' },
        { name: 'tucuman', type: 'boat' },
        { name: 'tucuman', type: 'boat' },
        { name: 'mendoza', type: 'hot-air-balloon' },
        { name: 'cordoba', type: 'tank' },
        { name: 'mendoza', type: 'hot-air-balloon' },
        { name: 'tucuman', type: 'boat' },
        { name: 'tucuman', type: 'boat' },
      ],
    };

    this.areas = [];
    this.areas.push(Noroeste.default);
    this.areas.push(Noreste.default);
    this.areas.push(Centro.default);
    this.areas.push(Cuyo.default);
    this.areas.push(Patagonia.default);

    this.provinces = {};
    for (let i = 0; i < this.areas.length; i += 1) {
      this.provinces = { ...this.provinces, ...this.areas[i] };
    }

    this.provinces = Object.entries(this.provinces);
    this.personalGoal = 'Insert the personal goal here';

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

  handleChecked = check => {
    console.log(check);
  };

  handleClick = () => {
    this.RenderDice.rollAllDice();
  };

  handleRoll = prp => {
    console.log(prp);
  };

  render() {
    return (
      <div id="back">
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
            strokeColor={this.state.color}
            lineWidth={borderSize}
          />
        </div>

        <div id="dice">
          <RenderDice
            availableArmies={this.state.availableArmies}
            ref={RenderDice => (this.RenderDice = RenderDice)}
            whenRoll={this.handleRoll}
          />
          <div id="buttonDice">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              Tirar los dados
            </Button>
          </div>
        </div>

        <div id="myProvinces">
          <h3 id="p">Mis Tarjetas de Provincias</h3>
          <MyCards
            button
            focusVisible
            obj={this.objPrueba}
            whenChecking={this.handleChecked}
          />
          <Button variant="contained" color="secondary">
            Canjear Por Ejercitos
          </Button>
        </div>
        <div id="globalGoal">
          <Objectives
            title="Objetivo Global"
            body="Conquistar 16 Provincias"
          />
        </div>
        <div id="personalGoal">
          <Objectives title="Objetivo Personal" body={this.personalGoal} />
        </div>
        <div id="chat" />
      </div>
    );
  }
}
