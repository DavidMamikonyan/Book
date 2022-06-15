import React from "react";
import styles from './aboutUs.module.css';
import PageTitle from './../../components/Common/PageTitle';
import bookIcon from './../../assets/images/bookImg.png';
import {useTranslation} from 'react-i18next';


export default () => {

    const {t} = useTranslation();

    return (
        <div className={styles['main-container']}>
            <div className={styles['top-area']}>
                <img src={bookIcon} alt='book image'/>
            </div>
            <PageTitle text={t('aboutUs.title')}/>
            <p className={styles['about-us-text']}>{t('aboutUs.description')}</p>
        </div>
    )
}