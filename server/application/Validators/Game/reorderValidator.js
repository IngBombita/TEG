const attackRouteRepository = require('../../../domain/Repositories/AttackRouteRepository');

exports.run = async function validate(gameState) {
  const isAvaibleRoute = await attackRouteRepository.exploreRoute(
    gameState.action.from.province,
    gameState.action.to.province,
  );
  if (!isAvaibleRoute) throw new Error('No es una ruta valida');
  if (gameState.action.from.chips <= 1)
    throw new Error('La provincia de origen no tiene suficientes fichas');
};
