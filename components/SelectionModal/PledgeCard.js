import React from 'react';
import styles from '../../styles/SelectionModal.module.css';
import Link from '../util/Link';
const PledgeCard = ({ title, description, price, stock, active, disable }) => {
    return (
        <div className={`${styles.Card} ${disable ? styles.disabled : ''}`}>
            <div className={styles.info}>
                <input
                    className={styles.Checkbox}
                    type='checkbox'
                    defaultChecked={active}
                    disabled={disable}
                />
                <div>
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
            <div className={`${styles.input} ${active ? '' : ' hidden'}`}>
                <label htmlFor='amount'>Enter your pledge </label>
                <span>
                    <p>$</p>{' '}
                    <input
                        type='text'
                        name='amount'
                        defaultValue={price}
                        disabled={disable}
                    />
                </span>
                <Link text='Continue' />
            </div>
        </div>
    );
};

export default PledgeCard;
