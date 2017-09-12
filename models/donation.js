const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    userId: String,
    orgId: String,
    initiativeId: String
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
