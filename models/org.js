const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orgSchema = new Schema({
  name: String,
  description: String,
  initiatives: [Number],
  orgPhoto: String,
});

const Org = mongoose.model('Org', orgSchema);
module.exports = Org;
