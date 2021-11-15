import React from 'react';

const Option = ({ title, amount, description, stock, disable = false }) => {
    return (
        <div>
            <span>
                <h4>{title}</h4> <p>Pledge ${amount} or more</p>
            </span>
            <p>{description}</p>
            <span>
                <p>
                    {stock} <small>left</small>
                </p>
                <a href=''>Select Reward</a>
            </span>
        </div>
    );
};

export default Option;
