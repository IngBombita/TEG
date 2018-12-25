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
