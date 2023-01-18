import React from 'react';
import './Wrapper.style.scss';

function Wrapper(props) {
    return <div className={`warpper ${props.className || ''}`}>{props.children}</div>;
}

export default Wrapper;
