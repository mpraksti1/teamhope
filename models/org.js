const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orgSchema = new Schema({
  orgId: String,
  email: {
    type: String,
    unique: true,
  },
  orgName: String
});

const Org = mongoose.model('Org', orgSchema);
module.exports = Org;
