const Car = require("../models/Car");

exports.getAll = () => Car.find();

exports.getOne = (id) => Car.findById(id);

exports.create = (carData) => Car.create(carData);