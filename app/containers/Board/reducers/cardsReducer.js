import { List } from 'immutable';
import { UPDATE_CARDS } from '../actions';

export const initialCardsState = List([]);

const updatePersonalCards = cardsArray => List(cardsArray);

export default function cardsReducer(state = initialCardsState, action) {
  switch (action.type) {
    case UPDATE_CARDS: {
      return updatePersonalCards(action.data.cards);
    }
    default:
      return state;
  }
}
