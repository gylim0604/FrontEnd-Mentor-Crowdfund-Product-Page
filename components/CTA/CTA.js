import React from 'react';
import styles from '../../styles/CTA.module.css';

function CTA() {
    return (
        <div className={styles.wrapper}>
            <span>
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <p>
                    A beautiful & handcrafted monitor stand to reduce neck and
                    eye strain.
                </p>
            </span>
            <span>
                <a href=''>Back this project</a>
                <a href=''>Bookmark</a>
            </span>
        </div>
    );
}

export default CTA;
