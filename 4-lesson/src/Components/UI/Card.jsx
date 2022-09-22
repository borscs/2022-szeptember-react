import React from 'react';

import cardcss from './Card.module.css';

const Card = (props) => {
    return <div className={`${cardcss.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
