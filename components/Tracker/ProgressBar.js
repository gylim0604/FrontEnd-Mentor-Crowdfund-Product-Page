import React from 'react';
import styles from '../../styles/Tracker.module.css';

const ProgressBar = ({ percent }) => {
    return (
        <div className={styles.progressBar}>
            <progress max='100' value={percent} />
        </div>
    );
};

export default ProgressBar;
