const { ATLAS_CONNECTION_STRING } = require("./constants-ports/constant");

exports.PORT = process.env.PORT || 5000;
// if you havent ATLAS_CONNECTION_STRING you can clear this connection string: 
exports.DB_CONNECTION_STRING = ATLAS_CONNECTION_STRING; // and:
// exports.DB_CONNECTION_STRING = 'mongodb://localhost:27017/rent-auto';

exports.JWT_SECRET = 'asd123gfgASD44dsfsgfASDJJLFDPL233454ds';
exports.AUTH_COOKIE_NAME = 'token';
exports.ADMIN_USER_EMAIL = 'Admin66@gmail.com';