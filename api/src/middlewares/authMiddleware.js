const { JWT_SECRET } = require('../constants');
const jwt = require('jsonwebtoken');
// const jwt = require('../utils/jwt');


exports.auth = function (req, res, next) {
    let token = req.headers['x-authorization'];
    if (token) {
        let decodedToken = jwt.verify(token, JWT_SECRET)
        if (decodedToken) {
            req.user = decodedToken;
            next();
        } else {
            res.status(401).json('You are not autorized');
        }
    } else {
        next();
    }
};

exports.isAuth = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).json({ message: 'You are not authorized' });
    }
}

exports.isGuest = function (req, res, next) {
    if (!req.user) {
        next();
    } else {
        res.status(401).json({ message: 'You are not authorized Guest' });
    }
}