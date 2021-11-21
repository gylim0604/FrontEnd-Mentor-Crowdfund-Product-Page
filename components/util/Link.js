import React from 'react';
import styles from '../../styles/Link.module.css';
const Link = ({ url, text, disable, onClick }) => {
    return (
        <a
            className={`${styles.link} ${disable ? styles.disable : ''}`}
            href={url}
            disabled
            onClick={onClick}
        >
            {text}
        </a>
    );
};

export default Link;
