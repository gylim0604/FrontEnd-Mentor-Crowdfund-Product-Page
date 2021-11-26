import React, { useState } from 'react';
import { BookmarkIcon, MastercraftLogo } from '../../assets/Icon';
import styles from '../../styles/CTA.module.css';
import { useAppContext } from '../../util/ModalContext';
import Link from '../util/Link';

function CTA() {
    let { state, handleChange } = useAppContext();
    let { selection } = state;
    const [active, setActive] = useState(false);
    return (
        <div className={styles.wrapper + ' container'}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
                <Link
                    text='Back this project'
                    onClick={() => {
                        handleChange({
                            ...state,
                            selection: !selection,
                            selected: 0,
                        });
                        let test = document.getElementById('selectionModal');
                        test.scrollTop;
                    }}
                />
                <span
                    className={`${styles.bookmark} ${
                        active ? styles.active : ''
                    }`}
                >
                    <a as href='#/' onClick={() => setActive(!active)}>
                        <BookmarkIcon active={active} />
                        <p>Bookmark</p>
                    </a>
                </span>
            </span>
        </div>
    );
}

export default CTA;
