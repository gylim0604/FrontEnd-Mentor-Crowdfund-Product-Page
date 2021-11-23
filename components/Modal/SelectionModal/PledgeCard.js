import React, { useState } from 'react';
import styles from '../../../styles/SelectionModal.module.css';
import { useAppContext } from '../../../util/ModalContext';
import Link from '../../util/Link';
const PledgeCard = ({
    title,
    description,
    price,
    stock,
    active,
    disable,
    onClick,
}) => {
    let { state, handleChange } = useAppContext();
    let { completion, selection } = state;
    const [amount, setAmount] = useState(0);
    return (
        <div
            className={`${styles.Card} ${disable ? styles.disabled : ''} ${
                active ? styles.selected : ''
            }`}
        >
            <input
                className={styles.Checkbox}
                type='checkbox'
                disabled={disable}
                onClick={onClick}
                checked={active}
            />
            <span className={styles.CardTitle}>
                <h4>{title}</h4>
                <p>{price ? `Pledge $ ${price} or more ` : ''}</p>
            </span>
            {stock ? (
                <p className={styles.stock}>
                    {stock} <span>left</span>
                </p>
            ) : (
                ''
            )}

            <p className={styles.description}>{description}</p>
            <div className={`${styles.input} ${active ? '' : ' hidden'}`}>
                <label htmlFor='amount'>Enter your pledge </label>
                <span>
                    <p>$</p>
                    <input
                        type='text'
                        name='amount'
                        defaultValue={price}
                        min={price}
                        disabled={disable}
                    />
                </span>
                <Link
                    text='Continue'
                    onClick={() => {
                        handleChange({
                            ...state,
                            completion: !completion,
                            selection: !selection,
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default PledgeCard;
