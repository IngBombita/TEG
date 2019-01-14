exports.startNewGame = function start(data) {
  if (data.players <= 0 || data.players > 6 || !data.players)
    throw new Error('La cantidad de jugadores no es valida');
  return data;
};
