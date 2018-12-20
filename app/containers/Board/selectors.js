import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBoardDomain = state => state.get('board', initialState);

const makeSelectBoard = () =>
  createSelector(selectBoardDomain, substate => substate.toJS());

export default makeSelectBoard;
export { selectBoardDomain };
