const mongoose = require('mongoose');
const { Schema } = mongoose;

const attackRouteSchema = new Schema({
  node1: { type: Schema.Types.ObjectId, ref: 'province_card' },
  node2: { type: Schema.Types.ObjectId, ref: 'province_card' },
});

const AttackRoute = mongoose.model('attack_route', attackRouteSchema);
module.exports = AttackRoute;
