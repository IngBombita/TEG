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

import React from 'react';

import MapItem from '../../components/board/MapItem';
import DiceItem from '../../components/board/DiceItem';
import CardsItem from '../../components/board/CardsItem';

import {
  makeSelectChips,

  makeSelectCardsHand,
  makeSelectCardsChecked,

  makeSelectDiceNumbers,
  makeSelectDiceAvailable,
} from './selectors';

import { setChip, updateCards, updateDice, updateCardsChecked } from './actions';

import boardReducer from './reducer';

import './src/style.css';

class Board extends React.PureComponent {
  constructor(props) {
    super(props);

    this.objPrueba = {
      cards: [
        { name: 'cordoba', type: 'tank' },
        { name: 'mendoza', type: 'hot-air-balloon' },
        { name: 'salta', type: 'boat' },
        { name: 'tucuman', type: 'boat' },
      ],
    };
    this.personalGoal = 'Insert the personal goal here';
  }

  onClickInMap = event => {
    const province = event.name;
    console.log(event);
    console.log(`${province} seleccionada.`);

    this.props.dispatch(setChip(province, 1, 1));
    this.props.dispatch(updateCards(this.objPrueba.cards));
    this.props.dispatch(updateDice([1, 2, 3], 3));
  };

  handleCardsCheck = checked => {
    this.props.dispatch(updateCardsChecked(checked));
  };
  handleCardsExchange = () => {
    console.log('Exchange button pressed');
  };

  onDiceRollFinished = () => {};

  render() {
    return (
      <div id="back">
        <MapItem
          onMapClick={this.onClickInMap}
          chips={this.props.chips}
        />
        <DiceItem
          diceNumbers={this.props.diceNumbers}
          availableDice={this.props.diceAvailable}
          onRollFinished={this.onDiceRollFinished}
          allowDiceRoll
        />
        <CardsItem
          cards={this.props.cardsHand}
          checked={this.props.cardsChecked}
          onCardChecked={this.handleCardsCheck}
          onCardsExchange={this.handleCardsExchange}
        />
      </div>
    );
  }
}
Board.propTypes = {
  dispatch: PropTypes.func.isRequired,

  chips: PropTypes.object.isRequired,

  cardsHand: PropTypes.object.isRequired,
  cardsChecked: PropTypes.object.isRequired,

  diceNumbers: PropTypes.object.isRequired,
  diceAvailable: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chips: makeSelectChips(),

  cardsHand: makeSelectCardsHand(),
  cardsChecked: makeSelectCardsChecked(),

  diceNumbers: makeSelectDiceNumbers(),
  diceAvailable: makeSelectDiceAvailable(),
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
