const objectiveModel = require('../Models/Objective');

exports.getAll = async players => {
  const query = objectiveModel.find(
    { players: { $lt: players } },
    { isDestruction: 1, _id: 0, target: 1, players: 1 },
  );
  const data = await query.exec();
  return data;
};
