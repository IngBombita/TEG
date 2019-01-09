import { Map } from 'immutable';
import { UPDATE_TURN } from '../actions';

export const initialGameState = Map({
  isPlayersTurn: false,
});

const updateTurn = (state, isTurn) => state.set('isPlayersTurn', isTurn);

export default function gameReducer(state, action) {
  switch (action.type) {
    case UPDATE_TURN: {
      return updateTurn(state, action.data.isPlayersTurn);
    }
    default:
      return state;
  }
}
