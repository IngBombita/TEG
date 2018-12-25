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

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

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

import { makeSelectChips } from './selectors';

import { setChip } from './actions';
import boardReducer from './reducer';

const WidthAbsoluteScale = 1064;
// const HeightAbsoluteScale = 2160;

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.colors = ['red', 'green', 'blue', 'orange', 'magenta', 'black'];

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
    const province = event.name;
    console.log(event);
    console.log(`${province} seleccionada.`);

    this.props.dispatch(setChip(province, 1, 1));
  };

  rollAll = () => {
    this.reactDice.rollAll();
  };

  rollDoneCallback = num => {
    console.log(`You rolled a ${num}`);
  };

  renderChips = () => {
    const chipComponents = [];
    const boardChips = this.props.chips;

    if (!boardChips) return <span />;

    boardChips.forEach(value => {
      const { province, player, armies } = value;

      chipComponents.push(
        <Chip
          key={province}
          province={province}
          color={this.colors[player]}
          armies={armies}
        />,
      );
    });

    return chipComponents;
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
          {this.renderChips()}
        </div>
        <div id="dices">
          <ReactDice
            numDice={4}
            rollDone={this.rollDoneCallback}
            outline
            faceColor="#0001ff"
            dotColor="#000100"
            disableIndividual
            ref={dice => {
              this.reactDice = dice;
            }}
          />
          <Button variant="contained" color="primary" onClick={this.rollAll}>
            Tira los dados
          </Button>
        </div>
      </div>
    );
  }
}
Board.propTypes = {
  dispatch: PropTypes.func.isRequired,
  chips: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chips: makeSelectChips(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'board', reducer: boardReducer });

export default compose(
  withReducer,
  withConnect,
)(Board);
