import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBoardDomain = state => state.get('board', initialState);

const makeSelectChips = () =>
  createSelector(selectBoardDomain, substate => substate.get('chips'));
const makeSelectCards = () =>
  createSelector(selectBoardDomain, substate => substate.get('cards'));
const makeSelectDiceNumbers = () =>
  createSelector(selectBoardDomain, substate => substate.get('dice'));

export { makeSelectChips, makeSelectCards, makeSelectDiceNumbers };
