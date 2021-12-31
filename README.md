# rent-auto
api: server side(express server with mongoDb).
Client: client side(React).
This is a fullstack app for rent a cars.

How to start:
on first terminal:
cd api
npm install
npm start
on second terminal:
cd client
npm install
npm start

in api/src/config/constants.js you need to change exports.DB_CONNECTION_STRING with 'mongodb://localhost:27017/rent-auto' if you have mongoDB Compas or use atlas connection string
// if you havent ATLAS_CONNECTION_STRING you can clear this connection string: 
exports.DB_CONNECTION_STRING = ATLAS_CONNECTION_STRING; // and:
// exports.DB_CONNECTION_STRING = 'mongodb://localhost:27017/rent-auto';