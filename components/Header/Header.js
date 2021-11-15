import React from 'react';
import styles from '../../styles/Header.module.css';
function Header() {
    return (
        <div className={styles.background}>
            <span className={styles.navbar}>
                <img src='/images/logo.svg' alt='' />
                <ul className={styles.menu}>
                    <li>
                        <a href=''>About</a>
                    </li>
                    <li>
                        <a href=''>Discover</a>
                    </li>
                    <li>
                        <a href=''>Get Started</a>
                    </li>
                </ul>
            </span>
        </div>
    );
}

export default Header;
