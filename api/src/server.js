const express = require('express');
const { PORT } = require('./constants');
const routes = require('./routes');
const { initDatabase } = require('./config/databaseConfig');
const expressConfig = require('./config/expressConfig');

const app = express();

expressConfig(app);

app.use(routes);
initDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`The app is running on http://localhost:${PORT}`));
    })
    .catch(err => {
        console.log('Cannot connect database:', err);
    })
