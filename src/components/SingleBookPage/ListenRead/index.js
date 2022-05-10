import React from "react";
import styles from './listenRead.module.css';
import headphoneIcon from "../../../assets/images/headphones.png";
import openBookIcon from "../../../assets/images/open-book.png";

export default () => {

    return (
        <div className={styles['main-container']}>
            <div className={styles['listen-book']}>
                <span>Listen book</span>
                <img src={headphoneIcon} alt='headphone icon'/>
            </div>
            <div className={`${styles['listen-book']} ${styles['read-text']}`}>
                <span>Read text</span>
                <img src={openBookIcon} alt='book icon'/>
            </div>
            <span className={styles['start-project']}>Start your project</span>
        </div>
    )
}