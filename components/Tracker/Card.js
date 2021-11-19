import React from 'react';
import styles from '../../styles/Tracker.module.css';
const Card = ({ amount, description }) => {
    return (
        <div className={styles.card}>
            <h3>{amount}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
