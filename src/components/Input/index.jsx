import React from 'react';
import './Input.style.scss';
function Input(props) {
    return (
        <input
            id={props.id}
            className={`input ${props.className}`}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
}

export default Input;
