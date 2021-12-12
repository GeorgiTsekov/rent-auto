import React from "react";
import { Alert } from "react-bootstrap";

const InputComponent = ({ title, type, name, defaultValue, onBlur, errors }) => {

    return (
        <>
            <label htmlFor={name} className="label">{title}</label>
            <input type={type} className="form-control" name={name} defaultValue={defaultValue} onBlur={onBlur} />
            <Alert variant="danger" show={errors}>{errors}</Alert>
        </>
    )
}

export default InputComponent;