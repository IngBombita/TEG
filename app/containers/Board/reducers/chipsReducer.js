import { List } from 'immutable';
import { SET_CHIP } from '../actions';

export const initialChipsState = List([]);

export default function chipsReducer(state = initialChipsState, action) {
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
