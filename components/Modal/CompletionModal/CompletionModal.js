import React from 'react';
import { CheckIcon } from '../../../assets/Icon';
import Link from '../../util/Link';
import styles from '../../../styles/CompletionModal.module.css';
import { useAppContext } from '../../../util/ModalContext';
const CompletionModal = () => {
    let { state, handleChange } = useAppContext();
    let { completion } = state;
    return (
        <div className={styles.wrapper + (completion ? '' : ' hidden')}>
            <CheckIcon />
            <h4>Thanks for your support!</h4>
            <p>
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
            </p>
            <Link
                text='Got it!'
                onClick={() =>
                    handleChange({ ...state, completion: !completion })
                }
            />
        </div>
    );
};

export default CompletionModal;
