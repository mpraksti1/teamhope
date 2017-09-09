const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rescourceSchema = new Schema({
    name: String,
    orgId: String,
    descriptionLong: String,
    descriptionShort: String,
    initiatives: [],
    Photo: String
});

const Resource = mongoose.model('Resource', rescourceSchema);
module.exports = Resource;
