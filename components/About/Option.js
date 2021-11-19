import React from 'react';
import Link from '../util/Link';
import styles from '../../styles/About.module.css';
const Option = ({ title, amount, description, stock, disable = false }) => {
    return (
        <div className={styles.Card}>
            <span className={styles.title}>
                <h4>{title}</h4> <p>Pledge ${amount} or more</p>
            </span>
            <p>{description}</p>
            <span className={styles.action}>
                <p>
                    {stock} <small>left</small>
                </p>
                <Link text='Select Reward' />
            </span>
        </div>
    );
};

export default Option;
