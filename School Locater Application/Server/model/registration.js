const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registration = new Schema({
    user_name: String,
    first_name: String,
    last_name: String,
    password: String,
    gender:String,
    age:String
});

exports.module = mongoose.model('registration', registration);