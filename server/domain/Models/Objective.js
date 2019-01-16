const mongoose = require('mongoose');
const { Schema } = mongoose;

const objectiveSchema = new Schema({
  isDestruction: { type: Boolean, required: true },
  target: [{ type: Schema.Types.ObjectId, ref: 'province_card' }],
  players: { type: Number, min: 0, max: 6 },
});

const Objective = mongoose.model('Objective', objectiveSchema);
module.exports = Objective;
