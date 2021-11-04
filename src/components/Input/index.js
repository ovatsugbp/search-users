import React from "react";

import "./style.css";

function Input({ type, placeholder, changeInput }) {
    return (
        <>
            <input
                className="input"
                type={type}
                placeholder={placeholder}
                onChange={(e) => changeInput(e.target.value)}
            />
        </>
    );
}

export default Input;
