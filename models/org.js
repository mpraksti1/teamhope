const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orgSchema = new Schema({
    name: String,
    descriptionLong: String,
    descriptionShort: String,
    founderName: String,
    founderShortBio: String,
    founderHeadShot: String,
    orgPhoto: String
});

const Org = mongoose.model('Org', orgSchema);
module.exports = Org;
