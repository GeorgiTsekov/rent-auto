import { useState } from "react";
import validator from 'validator';

const AuthValidations = () => {
    const [errors, setErrors] = useState(
        {
            name: false,
            email: false,
            password: false,
            rePassword: false
        });

    const emailChangeHandler = (e) => {
        let value = e.target.value;
        if (!validator.isEmail(value)) {
            setErrors(state => ({ ...state, email: 'Your email should be valid Email!' }));
        } else {
            setErrors(state => ({ ...state, email: false }));
        }
    }

    const nameChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length < 2 || value.length > 20) {
            setErrors(state => ({ ...state, name: 'Your name should be between 2 and 20 characters!' }));
        } else {
            setErrors(state => ({ ...state, description: false }));
        }
    }

    const passwordChangeHandler = (e) => {
        let value = e.target.value;
        if (!validator.isStrongPassword(value)) {
            setErrors(state => ({ ...state, password: 'Password shoult be strongest!!! (min: 8 characters, min 1 lower letter, min 1 upper letter, min 1 number and min 1 symbol' }));
        } else {
            setErrors(state => ({ ...state, password: false }));
        }
    }

    const rePasswordChangeHandler = (e) => {
        let value = e.target.value;
        if (!validator.isStrongPassword(value)) {
            setErrors(state => ({ ...state, rePassword: 'Repeat Password shoult be strongest!!! (min: 8 characters, min 1 lower letter, min 1 upper letter, min 1 number and min 1 symbol' }));
        } else {
            setErrors(state => ({ ...state, rePassword: false }));
        }
    }

    return {
        nameChangeHandler,
        emailChangeHandler,
        passwordChangeHandler,
        rePasswordChangeHandler,
        errors
    }
}

export default AuthValidations;