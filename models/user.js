const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,
  email: {
    type: String,
    unique: true,
  },
  firstName: String,
  lastName: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
