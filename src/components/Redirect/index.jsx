import React from 'react';
import './redirect.style.scss';
function Redirect(props) {
    return (
        <div
            className={`redirect ${props.className || ''}`}
            id={`redirect ${props.id || ''}`}
            onClick={props.onClick}
        >
            <i class="fa-solid fa-arrow-left" />
            {props.children}
        </div>
    );
}

export default Redirect;
