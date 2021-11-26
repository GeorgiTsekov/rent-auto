// const jwt = require('../utils/jwt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = require('../constants');

exports.register = ({ name, email, password }) => User.create({ name, email, password });

exports.login = async ({ email, password }) => {
    let user = await User.findByEmail(email);
    if (!user) {
        throw new Error('invalid email or password!');
    }

    let isValid = await user.validatePassword(password);

    if (!isValid) {
        throw new Error('invalid email or password!');
    }

    let payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
    }

    let token = jwt.sign(payload, JWT_SECRET);
    console.log(token)
    console.log(user)

    return { user, token };
}
