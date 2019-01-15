const AttackRouteModel = require('../Models/AttackRoute');

exports.getAll = async () => {
  const query = AttackRouteModel.find({}, { _id: 0 })
    .populate('node1')
    .populate('node2');
  const data = await query.exec();
  return data;
};
