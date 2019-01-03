exports.startNewGame = function start(data) {
  const gameState = data;
  if (!data.players) console.error('No se expecifica la cantidad de jugadores');
  return gameState;
};
