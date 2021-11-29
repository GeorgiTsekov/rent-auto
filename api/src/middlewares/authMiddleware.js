const { JWT_SECRET } = require('../constants');
const jwt = require('jsonwebtoken');
// const jwt = require('../utils/jwt');


exports.auth = function (req, res, next) {
    const authHeader = req.get('Authorization')

    if (!authHeader) {
        return res.status(401).send({
            message: "Missing Authorization header"
        });
    }

    console.log(authHeader)
    const token = authHeader.split(' ')[1];
    console.log("Token", token)

    try {
        jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).send({
            message: "You are not allowed to do this"
        })
    }

    // let token = req.headers['x-authorization'];
    // console.log(token)
    // if (token) {
    //     console.log(token)
    //     let decodedToken = jwt.verify(token, JWT_SECRET)
    //     if (decodedToken) {
    //         req.user = decodedToken;
    //         next();
    //     } else {
    //         res.status(401).json('sdfsdfsdf');
    //     }
    // } else {
    //     next();
    // }
};

// exports.isAuth = function (req, res, next) {
//     if (req.user) {
//         next();
//     } else {
//         res.status(401).json({ message: 'You are not authorized' });
//     }
// }

// exports.isGuest = function (req, res, next) {
//     if (!req.user) {
//         next();
//     } else {
//         res.status(401).json({ message: 'You authorized Guest' });
//     }
// }