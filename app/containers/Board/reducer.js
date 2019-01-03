import { List, Map } from 'immutable';

import cardsReducer, { initialCardsState } from './reducers/cardsReducer';
import chipsReducer, { initialChipsState } from './reducers/chipsReducer';
import diceReducer, { initialDiceState } from './reducers/diceReducer';

import combineReducers from '../../utils/custom/combineReducers';

export const initialState = Map({
  chips: initialChipsState,
  dice: initialDiceState,
  cards: initialCardsState,
});

export default (state = initialState, action) =>
  combineReducers(
    state,
    action,
    List([
      Map({
        key: 'chips',
        reducer: chipsReducer,
      }),
      Map({
        key: 'cards',
        reducer: cardsReducer,
      }),
      Map({
        key: 'dice',
        reducer: diceReducer,
      }),
    ]),
  );
