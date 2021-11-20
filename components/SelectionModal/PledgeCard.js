import React from 'react';
import styles from '../../styles/SelectionModal.module.css';
const PledgeCard = ({ title, description, price, stock }) => {
    return (
        <div className={styles.Card}>
            <input className={styles.Checkbox} type='checkbox' />
            <div className={styles.info}>
                <span className={styles.CardTitle}>
                    {/* <span> */}
                    <h4>{title}</h4>
                    <p>{price ? `Pledge ${price} or more ` : ''}</p>
                    {/* </span> */}
                    <p className={styles.stock}>
                        {stock}
                        <span>{stock ? 'left' : ''}</span>
                    </p>
                </span>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default PledgeCard;
