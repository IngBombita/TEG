import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the room state domain
 */

const selectRoomDomain = state => state.get('room', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Room
 */

const makeSelectRoom = () =>
  createSelector(selectRoomDomain, substate => substate.toJS());

export default makeSelectRoom;
export { selectRoomDomain };
