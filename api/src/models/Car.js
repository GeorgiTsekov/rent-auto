const mongoose = require('mongoose');
const validator = require('validator');

const carSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Suv', 'Sedan', 'Coupe', 'Hatchback', 'Combi', 'Limousine', 'Off-road'],
        required: true,
    },
    make: {
        type: String,
        required: [true, 'Make is required!'],
        minlength: 2,
    },
    model: {
        type: String,
        required: [true, 'Model is required!'],
        minlength: 1,
    },
    year: {
        type: Number,
        required: true,
        min: 1930,
        max: 2021,
    },
    image: {
        type: String,
        required: true,
        validate: validator.isURL,
    },
    engine: {
        type: String,
        enum: ['Gasoline', 'Diesel', 'Hybrid', 'Electric', 'Legs'],
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 300,
    },
    seats: {
        type: Number,
        required: true,
        min: 2,
        max: 9,
    },
    doors: {
        type: Number,
        required: true,
        min: 2,
        max: 5,
    },
    airConditioner: {
        type: Boolean,
    },
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tenant: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;