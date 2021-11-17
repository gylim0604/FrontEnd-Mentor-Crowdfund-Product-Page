import React from 'react';
import styles from '../../styles/Link.module.css';
const Link = ({ url, text }) => {
    return (
        <a className={styles.link} href={url}>
            {text}
        </a>
    );
};

export default Link;
