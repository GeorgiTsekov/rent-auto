const mongoose = require('mongoose');
const validator = require('validator');

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
        minlength: 2,
    },
    model: {
        type: String,
        required: true,
        minlength: 1,
    },
    type: {
        type: String,
        enum: ['Suv', 'Sedan', 'Coupe', 'Hatchback', 'Combi', 'Limousine', 'Off-road'],
        required: true,
    },
    image: {
        type: String,
        required: true,
        validate: validator.isURL,
    },
    fuel: {
        type: String,
        enum: ['Gasoline', 'Diesel', 'Hybrid', 'Electric', 'Legs'],
        required: true,
    },
    transmission: {
        type: String,
        enum: ['Manual', 'Automat'],
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 300,
    },
    mileage: {
        type: Number,
        required: true,
        min: 1,
        max: 1000000
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 1000
    },
    seats: {
        type: Number,
        required: true,
        min: 1,
        max: 9,
    },
    doors: {
        type: Number,
        required: true,
        min: 2,
        max: 5,
    },
    luggage: {
        type: Number,
        required: true,
        min: 0,
        max: 6,
    },
    year: {
        type: Number,
        required: true,
        min: 1930,
        max: 2021,
    },
    childSeat: {
        type: Boolean,
    },
    gps: {
        type: Boolean,
    },
    music: {
        type: Boolean,
    },
    bluetooth: {
        type: Boolean,
    },
    onboardComputer: {
        type: Boolean,
    },
    audioInput: {
        type: Boolean,
    },
    remoteCentralLocking: {
        type: Boolean,
    },
    airConditioner: {
        type: Boolean,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    tenants: [
        {
            tenantId: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            dateFrom: {
                type: Date,
            },
            dateTo: {
                type: Date,
            }
        }
    ],
}, {
    timestamps: true
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;