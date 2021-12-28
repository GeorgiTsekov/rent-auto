const mongoose = require('mongoose');

const { DB_CONNECTION_STRING } = require('./constants-ports/constants')

exports.initDatabase = function () {
    return mongoose.connect(DB_CONNECTION_STRING);
};