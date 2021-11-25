// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');

// const { auth } = require('../middlewares/authMiddleware');

// function expressConfig(app) {
//     // app.locals.title = 'Real Estate';
//     app.use('/static', express.static(path.resolve(__dirname, '../static')));
//     app.use(express.urlencoded({ extended: true }));
//     app.use(cookieParser());
//     app.use(auth);
// }

// module.exports = expressConfig;

const express = require('express');
// const cookieParser = require('cookie-parser');
const cors = require('cors');
// const path = require('path');
const { auth } = require('../middlewares/authMiddleware');

module.exports = (app) => {
    app.use(cors({
      exposedHeaders: 'Authorization'
    }));

    // app.use('/static', express.static(path.resolve(__dirname, '../static')));
    app.use(express.json())
    app.use(express.urlencoded({
        extended: true
    }));
    // app.use(cookieParser());
    app.use(auth);
};