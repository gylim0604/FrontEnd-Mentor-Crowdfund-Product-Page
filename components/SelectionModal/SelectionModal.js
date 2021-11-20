import React from 'react';
import styles from '../../styles/SelectionModal.module.css';
import PledgeCard from './PledgeCard';
import { ModalClose } from '../../assets/Icon';

const SelectionModal = ({ active, onClick }) => {
    return (
        <div
            className={styles.modal + ' container' + (active ? '' : ' hidden')}
        >
            <span className={styles.modalClose} onClick={onClick}>
                <ModalClose />
            </span>
            <span className={styles.CTA}>
                <h3>Back this project</h3>
                <p>
                    Want to support us in bringing Mastercraft Bamboo Monitor
                    Riser out in the world?
                </p>
            </span>
            <PledgeCard
                title='Pledge with no reward '
                description='Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'
                active={true}
            />
            <PledgeCard
                title='Bamboo Stand'
                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                price='25'
                stock='101'
            />
            <PledgeCard
                title='Black Edition Stand'
                description='You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
                price='75'
                stock='64'
            />
            <PledgeCard
                title='Mahogany Special Edition'
                description='You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
                price='200'
                stock='0'
                disable={true}
            />
        </div>
    );
};

export default SelectionModal;
