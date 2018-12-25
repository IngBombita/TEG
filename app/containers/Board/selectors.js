import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBoardDomain = state => state.get('board', initialState);

const makeSelectChips = () =>
  createSelector(selectBoardDomain, substate => substate.get('chips'));

export { makeSelectChips };
