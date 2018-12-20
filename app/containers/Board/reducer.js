import { fromJS } from 'immutable';

import { PLACE_CHIP } from './actions';

export const initialState = fromJS({
  chips: [],
});

function boardReducer(state = initialState, action) {
  switch (action.type) {
    case PLACE_CHIP:
      return state.set('chips', state.get('chips').push(action.data));
    default:
      return state;
  }
}

export default boardReducer;
