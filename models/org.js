const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orgSchema = new Schema({

});

const Org = mongoose.model('Org', orgSchema);
module.exports = Org;
