const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const initiativeSchema = new Schema({
  name: String,
  value: Number,
  selected: String,
  title: String,
  description: String,
  orgId: String,
  image: String,
});

const Initiative = mongoose.model('Initiative', initiativeSchema);
module.exports = Initiative;
