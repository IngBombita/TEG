export const PLACE_CHIP = 'PLACE_CHIP';
export function placeChip(province, player) {
  return {
    type: PLACE_CHIP,
    data: {
      province,
      player,
    },
  };
}
