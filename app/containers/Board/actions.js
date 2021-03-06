export const SET_CHIP = 'UPDATE_CHIP';
export function setChip(province, player, armies) {
  return {
    type: SET_CHIP,
    data: {
      province,
      player,
      armies,
    },
  };
}

export const UPDATE_CARDS = 'UPDATE_CARDS';
export function updateCards(cards) {
  return {
    type: UPDATE_CARDS,
    data: {
      cards,
    },
  };
}
export const UPDATE_CARDS_CHECKED = 'UPDATE_CARDS_CHECKED';
export function updateCardsChecked(checked) {
  return {
    type: UPDATE_CARDS_CHECKED,
    data: {
      checked,
    },
  };
}

export const UPDATE_DICE = 'UPDATE_DICE';
export function updateDice(diceNumbers, availableDice) {
  return {
    type: UPDATE_DICE,
    data: {
      diceNumbers,
      availableDice,
    },
  };
}

export const UPDATE_TURN = 'UPDATE_TURN';
export function updateTurn(isPlayersTurn) {
  return {
    type: UPDATE_TURN,
    data: {
      isPlayersTurn,
    },
  };
}

export const SET_OBJECTIVE = 'SET_OBJECTIVE';
export function setObjective(objective) {
  return {
    type: SET_OBJECTIVE,
    data: {
      objective,
    },
  };
}
