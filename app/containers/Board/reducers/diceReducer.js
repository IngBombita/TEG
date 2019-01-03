import { List, Map } from 'immutable';
import { UPDATE_DICE } from '../actions';

export const initialDiceState = Map({ numbers: List([6, 6, 6]), available: 3 });

const updateDice = diceData =>
  Map({
    numbers: List(diceData.diceNumbers),
    available: diceData.availableDice,
  });

export default function diceReducer(state = initialDiceState, action) {
  switch (action.type) {
    case UPDATE_DICE: {
      return updateDice(action.data);
    }
    default:
      return state;
  }
}
