import React from 'react';

import buttonCss from './Button.module.css';


const Button = (props) => {
    return(
        <button
            className={buttonCss.button}
            type={props.type || 'button'}
            onClick={props.onClick}>{props.children}</button>
    );
};


export default Button;
