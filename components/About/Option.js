import React from 'react';
import Link from '../util/Link';
import styles from '../../styles/About.module.css';
import { useAppContext } from '../../util/ModalContext';
const Option = ({ title, amount, description, stock, disable = false }) => {
    let { state, setSelection } = useAppContext();
    let { selection } = state;
    return (
        <div className={`${styles.Card} ${disable ? styles.disable : ''}`}>
            <span className={styles.title}>
                <h4>{title}</h4> <p>Pledge ${amount} or more</p>
            </span>
            <p>{description}</p>
            <span className={styles.action}>
                <p>
                    {stock} <small>left</small>
                </p>
                <Link
                    text={disable ? 'Out of Stock' : 'Select Reward'}
                    disable={disable}
                    onClick={() => setSelection(!selection)}
                />
            </span>
        </div>
    );
};

export default Option;
