exports.attack = function attack(data) {
  if (!data.action)
    throw new Error('No se expecifico que ataque desea realizar');
  if (data.roundNumber < 3)
    throw new Error('No se ha llegado a la etapa de ataques todavia');
  return data;
};
