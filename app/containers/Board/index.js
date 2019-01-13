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

import MapItem from '../../components/board/MapItem/Loadable';
import DiceItem from '../../components/board/DiceItem/Loadable';
import CardsItem from '../../components/board/CardsItem/Loadable';

import {
  makeSelectChips,
  makeSelectCardsHand,
  makeSelectCardsChecked,
  makeSelectDiceNumbers,
  makeSelectDiceAvailable,
  makeSelectPlayersTurn,
} from './selectors';

import {
  setChip,
  updateCards,
  updateDice,
  updateCardsChecked,
  updateTurn,
} from './actions';

import boardReducer from './reducer';

import './src/style.css';

class Board extends React.PureComponent {
  constructor(props) {
    super(props);

    this.objPrueba = {
      cards: [
        { name: 'Cordoba', type: 'tank' },
        { name: 'Mendoza', type: 'hot-air-balloon' },
        { name: 'Salta', type: 'boat' },
        { name: 'Tucuman', type: 'boat' },
        { name: 'Misiones', type: 'boat' },
      ],
    };
    this.personalGoal = 'Insert the personal goal here';

    alert(
      'PARA ACTIVAR/DESACTIVAR EL TURNO APRETAR JUJUY\n' +
        'PARA OBTENER CARTAS DE PROVINCIAS Y CAMBIAR LOS DADOS APRETAR MISIONES',
    );
  }

  onClickInMap = event => {
    const province = event.name;

    console.log(`${province} seleccionada.`);

    if (province === 'Jujuy')
      this.props.dispatch(updateTurn(!this.props.isPlayersTurn));

    if (!this.props.isPlayersTurn) return;

    if (province === 'Misiones') {
      this.props.dispatch(updateCards(this.objPrueba.cards));
      this.props.dispatch(updateDice([1, 2, 3], 3));
    }

    this.props.dispatch(setChip(province, 1, 1));
  };

  handleUpdateCardsChecked = checked => {
    const checkedArray = checked.toJS();

    this.props.dispatch(updateCardsChecked(checkedArray));
  };

  handleCardsExchange = () => {
    console.log('Exchange button pressed');
  };

  onDiceRollFinished = () => {};

  render() {
    return (
      <div id="back">
        <MapItem onMapClick={this.onClickInMap} chips={this.props.chips} />
        <DiceItem
          diceNumbers={this.props.diceNumbers}
          availableDice={this.props.diceAvailable}
          onRollFinished={this.onDiceRollFinished}
          allowDiceRoll={this.props.isPlayersTurn}
        />
        <CardsItem
          cards={this.props.cardsHand}
          checked={this.props.cardsChecked}
          onCardToggle={this.handleUpdateCardsChecked}
          onCardsExchange={this.handleCardsExchange}
          isPlayersTurn={this.props.isPlayersTurn}
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

  isPlayersTurn: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chips: makeSelectChips(),

  cardsHand: makeSelectCardsHand(),
  cardsChecked: makeSelectCardsChecked(),

  diceNumbers: makeSelectDiceNumbers(),
  diceAvailable: makeSelectDiceAvailable(),

  isPlayersTurn: makeSelectPlayersTurn(),
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
