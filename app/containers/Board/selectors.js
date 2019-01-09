import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBoardDomain = state => state.get('board', initialState);

const makeSelectChips = () =>
  createSelector(selectBoardDomain, substate => substate.get('chips'));

const makeSelectCardsHand = () =>
  createSelector(selectBoardDomain, substate =>
    substate.getIn(['cards', 'hand']),
  );
const makeSelectCardsChecked = () =>
  createSelector(selectBoardDomain, substate =>
    substate.getIn(['cards', 'checked']),
  );

const makeSelectDiceNumbers = () =>
  createSelector(selectBoardDomain, substate =>
    substate.getIn(['dice', 'numbers']),
  );
const makeSelectDiceAvailable = () =>
  createSelector(selectBoardDomain, substate =>
    substate.getIn(['dice', 'available']),
  );

const makeSelectPlayersTurn = () =>
  createSelector(selectBoardDomain, substate =>
    substate.getIn(['game', 'isPlayersTurn']),
  );

export {
  makeSelectChips,
  // eslint-disable-next-line prettier/prettier

  makeSelectCardsHand,
  makeSelectCardsChecked,
  // eslint-disable-next-line prettier/prettier

  makeSelectDiceNumbers,
  makeSelectDiceAvailable,
  // eslint-disable-next-line prettier/prettier

  makeSelectPlayersTurn,
};
