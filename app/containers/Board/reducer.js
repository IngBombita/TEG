import { List, Map, fromJS } from 'immutable';

import { SET_CHIP, UPDATE_CARDS, UPDATE_DICE } from './actions';

import combineReducers from '../../utils/custom/combineReducers';

const initialChipsState = List([]);
const initialCardsState = List([]);
const initialDiceState = List([6, 6, 6]);

export const initialState = Map({
  chips: initialChipsState,
});

// ===== CHIPS =======
function chipsReducer(state = initialChipsState, action) {
  switch (action.type) {
    case SET_CHIP: {
      const foundProvIndex = searchProvinceChipIndex(
        state,
        action.data.province,
      );

      if (foundProvIndex >= 0)
        return updateProvinceChip(state, action.data, foundProvIndex);

      return addNewProvinceChip(state, action.data);
    }
    default:
      return state;
  }
}

function searchProvinceChipIndex(stateChipsArray, province) {
  const foundProvinceChipIndex = stateChipsArray.findIndex(
    chip => chip.province === province,
  );

  if (foundProvinceChipIndex) return foundProvinceChipIndex;
  return null;
}
function updateProvinceChip(state, data, index) {
  return state.update(index, () => data);
}
function addNewProvinceChip(state, data) {
  return state.push(data);
}

// ======== CARDS =========
const updatePersonalCards = cardsArray => fromJS(cardsArray);

function cardsReducer(state = initialCardsState, action) {
  switch (action.type) {
    case UPDATE_CARDS: {
      return updatePersonalCards(action.data.cards);
    }
    default:
      return state;
  }
}

// ====== DICE =====
const updateDiceNumbers = numbers => fromJS(numbers);

function diceReducer(state = initialDiceState, action) {
  switch (action.type) {
    case UPDATE_DICE: {
      return updateDiceNumbers(action.data.diceNumbers);
    }
    default:
      return state;
  }
}

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
