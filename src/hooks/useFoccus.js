import React from 'react';
const useFocus = () => {
    const htmlRef = React.useRef(null);
    const setFocus = () => {
        htmlRef.current && htmlRef.current.focus();
    };
    return [htmlRef, setFocus];
};

export default useFocus;
