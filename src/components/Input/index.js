import React from "react";

import "./style.css";

function Input({ type, placeholder, changeInput }) {
    return (
        <>
            <input
                className="input"
                type={type}
                placeholder={placeholder}
                onKeyUp={(e) => changeInput(e.target.value, e.key)}
            />
        </>
    );
}

export default Input;
