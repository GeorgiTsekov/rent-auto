import { useState } from "react";
import validator from 'validator';

const CarValidations = () => {
    const [errors, setErrors] = useState(
        {
            description: false,
            image: false,
            make: false,
            model: false,
            price: false,
            year: false,
            mileage: false,
            seats: false,
            doors: false,
            luggage: false
        });

    const imageChangeHandler = (e) => {
        let value = e.target.value;
        if (!validator.isURL(value)) {
            setErrors(state => ({ ...state, image: 'Your image should be valid URL!' }));
        } else {
            setErrors(state => ({ ...state, image: false }));
        }
    }

    const descriptionChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length > 300) {
            setErrors(state => ({ ...state, description: 'Your description should be maximum 300 characters!' }));
        } else {
            setErrors(state => ({ ...state, description: false }));
        }
    }

    const makeChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length < 2) {
            setErrors(state => ({ ...state, make: 'Your make should be minimum 2 characters!' }));
        } else {
            setErrors(state => ({ ...state, make: false }));
        }
    }

    const modelChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length < 2) {
            setErrors(state => ({ ...state, model: 'Your model should be minimum 1 characters!' }));
        } else {
            setErrors(state => ({ ...state, model: false }));
        }
    }

    const priceChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 1000 || value < 1) {
            setErrors(state => ({ ...state, price: 'Your price should be between 1 and 1000!' }));
        } else {
            setErrors(state => ({ ...state, price: false }));
        }
    }

    const yearChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 2021 || value < 1930) {
            setErrors(state => ({ ...state, year: 'Your year should be between 1930 and 2021!' }));
        } else {
            setErrors(state => ({ ...state, year: false }));
        }
    }

    const mileageChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 1000000 || value < 1) {
            setErrors(state => ({ ...state, mileage: 'Your mileage should be between 1 and 1000000!' }));
        } else {
            setErrors(state => ({ ...state, mileage: false }));
        }
    }

    const seatsChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 9 || value < 1) {
            setErrors(state => ({ ...state, seats: 'Your seats should be between 1 and 9!' }));
        } else {
            setErrors(state => ({ ...state, seats: false }));
        }
    }

    const doorsChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 5 || value < 2) {
            setErrors(state => ({ ...state, doors: 'Your doors should be between 2 and 5!' }));
        } else {
            setErrors(state => ({ ...state, doors: false }));
        }
    }

    const luggageChangeHandler = (e) => {
        let value = e.target.value;
        if (value > 6 || value < 0) {
            setErrors(state => ({ ...state, luggage: 'Your luggage should be between 0 and 6!' }));
        } else {
            setErrors(state => ({ ...state, luggage: false }));
        }
    }

    return {
        imageChangeHandler,
        descriptionChangeHandler,
        makeChangeHandler,
        yearChangeHandler,
        doorsChangeHandler,
        modelChangeHandler,
        priceChangeHandler,
        seatsChangeHandler,
        luggageChangeHandler,
        mileageChangeHandler,
        errors
    }
}

export default CarValidations;