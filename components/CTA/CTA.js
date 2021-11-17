import React from 'react';
import { BookmarkIcon, MastercraftLogo } from '../../assets/Icon';
import styles from '../../styles/CTA.module.css';
import Link from '../util/Link';

function CTA() {
    return (
        <div className={styles.wrapper + ' container'}>
            <img
                className={styles.logo}
                src='/images/logo-mastercraft.svg'
                alt='Mastercraft logo'
            />
            <span className={styles.info}>
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <p>
                    A beautiful & handcrafted monitor stand to reduce neck and
                    eye strain.
                </p>
            </span>
            <span className={styles.action_bar}>
                <Link url='#' text='Back this project' />
                <span className={styles.bookmark}>
                    <BookmarkIcon />
                    <a href=''>Bookmark</a>
                </span>
            </span>
        </div>
    );
}

export default CTA;
