import React from 'react';
import styles from '../../styles/Link.module.css';
const Link = ({ url, text, disable }) => {
    return (
        <a
            className={`${styles.link} ${disable ? styles.disable : ''}`}
            href={url}
            disabled
        >
            {text}
        </a>
    );
};

export default Link;
