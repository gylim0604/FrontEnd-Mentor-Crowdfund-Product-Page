import React from 'react';

const Card = ({ amount, description }) => {
    return (
        <div>
            <h3>{amount}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
