import React from "react";

const CheckboxFormComponent = ({ form, title, name, defaultChecked }) => {
    return (
        <>
            <div className={form}>
                <label htmlFor={name} className="label">{title}</label>
                <input type="checkbox" className="form-control-checkbox" name={name} defaultChecked={defaultChecked} />
            </div>
        </>
    )
}

export default CheckboxFormComponent;