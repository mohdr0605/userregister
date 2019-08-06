const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullname: String,
    mobile: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);