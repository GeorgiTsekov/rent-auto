import { useState } from "react";

const DateValidations = () => {
    const [errors, setErrors] = useState(
        {
            dateFrom: false,
            dateTo: false
        });

    const dateNow = new Date(Date.now()).toJSON().slice(0, 10);

    const dateFromChangeHandler = (e) => {
        let value = e.target.value;
        if (!isValidDate(value)) {
            setErrors(state => ({ ...state, dateFrom: 'Date shout be in this format 2021-12-30(Year-month-day)!' }));
        } else if (value < dateNow) {
            setErrors(state => ({ ...state, dateFrom: 'Pick-Up Date shoult be equal or bigger then Date today' }));
        } else {
            setErrors(state => ({ ...state, dateFrom: false }));
        }
    }

    const dateToChangeHandler = (e) => {
        let value = e.target.value;
        if (!isValidDate(value)) {
            setErrors(state => ({ ...state, dateTo: 'Date shout be in this format 2021-12-30(Year-month-day)!' }));
        } else if (value < dateNow) {
            setErrors(state => ({ ...state, dateFrom: 'Pick-Up Date shoult be equal or bigger then Date today' }));
        } else {
            setErrors(state => ({ ...state, dateTo: false }));
        }
    }

    function isValidDate(value) {
        if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) {
            return false;
        }

        const date = new Date(value);
        if (!date.getTime()) return false;
        return date.toISOString().slice(0, 10) === value;
    }

    return {
        dateFromChangeHandler,
        dateToChangeHandler,
        errors
    }
}

export default DateValidations;