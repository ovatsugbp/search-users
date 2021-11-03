import React from "react";
import "./style.css";

function Input({ type, placeholder }) {
    return (
        <>
            <input className="input" type={type} placeholder={placeholder} />
        </>
    );
}

export default Input;
