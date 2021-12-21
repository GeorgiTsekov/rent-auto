import React from "react";
import { Alert } from "react-bootstrap";

const InputComponent = ({ form, title, type, name, defaultValue, onBlur, errors }) => {
    return (
        <>
            <div className={form}>
                <label htmlFor={name} className="label">{title}</label>
                <input type={type} className="form-control" name={name} defaultValue={defaultValue} onBlur={onBlur} />
                <Alert variant="danger" show={errors}>{errors}</Alert>
            </div>

        </>
    )
}

export default InputComponent;