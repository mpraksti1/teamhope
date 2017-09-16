const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    orgName: String,
    initiativeName: String,
    userId: String,
    orgId: String,
    initiativeId: String,
    amount: Number
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
