import React from "react";
import styles from './listenRead.module.css';
import headphoneIcon from "../../../assets/images/headphones.png";
import openBookIcon from "../../../assets/images/open-book.png";
import {useTranslation} from "react-i18next";

export default () => {

    const {t, i18n} = useTranslation();

    return (
        <div className={styles['main-container']} dir='ltr'>
            <div className={styles['listen-book']}>
                <span>{t('listenRead.listen')}</span>
                <img src={headphoneIcon} alt='headphone icon'/>
            </div>
            <div className={`${styles['listen-book']} ${styles['read-text']}`}>
                <span>{t('listenRead.read')}</span>
                <img src={openBookIcon} alt='book icon'/>
            </div>
            <span className={styles['start-project']}>{t('common.startYourProject')}</span>
        </div>
    )
}