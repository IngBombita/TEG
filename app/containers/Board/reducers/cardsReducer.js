import { List, Map } from 'immutable';
import { UPDATE_CARDS, UPDATE_CARDS_CHECKED } from '../actions';

export const initialCardsState = Map({
  hand: List([]),
  checked: List([]),
});

const updatePersonalCards = (cardsArray, state) =>
  state.set('hand', List(cardsArray));
const updateCardsChecked = (checked, state) =>
  state.set('checked', List(checked));

export default function cardsReducer(state = initialCardsState, action) {
  switch (action.type) {
    case UPDATE_CARDS: {
      return updatePersonalCards(action.data.cards, state);
    }
    case UPDATE_CARDS_CHECKED: {
      return updateCardsChecked(action.data.checked, state);
    }
    default:
      return state;
  }
}
