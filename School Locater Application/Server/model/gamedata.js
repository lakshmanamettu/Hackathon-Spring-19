const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const game_data = new Schema({}, { strict: false });

exports.module = mongoose.model('game_data', game_data);