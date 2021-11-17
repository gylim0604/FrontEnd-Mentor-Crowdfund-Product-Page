import React from 'react';
import Card from './Card';

const Tracker = () => {
    return (
        <div className='container'>
            <Card amount='$89,914 ' description='of $100,000 backed' />
            <Card amount='5,007 ' description='total backers' />
            <Card amount=' 56' description='days left' />
        </div>
    );
};

export default Tracker;
