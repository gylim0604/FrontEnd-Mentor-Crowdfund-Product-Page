import React from 'react';
import Card from './Card';
import styles from '../../styles/Tracker.module.css';
import ProgressBar from './ProgressBar';

const Tracker = () => {
    return (
        <div className={' container'}>
            <span className={styles.stats}>
                <Card amount='$89,914 ' description='of $100,000 backed' />
                <hr />
                <Card amount='5,007 ' description='total backers' />
                <hr />
                <Card amount=' 56' description='days left' />
            </span>
            <ProgressBar percent={(89914 / 100000) * 100} />
        </div>
    );
};

export default Tracker;
