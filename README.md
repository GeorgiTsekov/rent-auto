# rent-auto
api: server side(express server with mongoDb).
Client: client side(React).
This is a fullstack app for rent a cars.
Database is hosted in MongoDB Atlas, Backend(api) in Vercel and Frondend(client) in Vercel
You can create user to test the app and rent a car;
You can test the app with Admin if you want. He can create, edit delete cars, and delete rented trips.
email: Admin66@gmail.com
password: Admin66@gmail.com

How to start:
1) on first terminal:
    - cd api
    - npm install
    - npm start
    
2) on second terminal:
    - cd client
    - npm install
    - npm start

3) in api/src/config/constants.js you need to change DB_CONNECTION_STRING with 'mongodb://localhost:27017/rent-auto' if you have mongoDB Compas or atlas to use on your pc data base

4) in client/src/constants you can change BASE_URL= 'http://localhost:5000' to use local on port 5000 and on your pc

Thank you :)

Link to my Project: https://rent-auto-ecru.vercel.app/