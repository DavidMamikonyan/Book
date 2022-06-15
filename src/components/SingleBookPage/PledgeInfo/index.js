import React from "react";
import styles from './pledgeInfo.module.css';
import ProgressBarLine from "../../Common/ProgressBar/ProgressBarLine";
import {useTranslation} from "react-i18next";

export default (props) => {

    const {t} = useTranslation();


    return (
        <div className={styles['main-container']}>
            <div className={styles['info-container']}>
                <div>
                    <span className={styles['odd']}>{t('singleBook.goal')}</span>
                    <span className={`${styles['even']} ${styles['goal']}`}>${props.goal}</span>
                </div>
                <div>
                    <span className={styles['odd']}>{t('singleBook.donated')}</span>
                    <span className={styles['even']}>${props.donated}</span>
                </div>
                <div>
                    <span className={styles['odd']}>{t('singleBook.time')}</span>
                    <span className={styles['even']}>${props.deadline}</span>
                </div>
            </div>
            <ProgressBarLine progress={props.donated / props.goal * 100}/>
            <button>{t('common.pledge')}</button>
        </div>
    )
}