import React from "react";
import styles from './pledged.module.css';
import {useTranslation} from "react-i18next";


export default (props) => {

    const {t, i18n} = useTranslation()
    const total = props.data.length;
    let totalSum = 0;

    return (
        <div className={styles['main-container']}>
            <span className={styles['title']}>{t('pledgedUser.title')}</span>
            {props.data.map((item, index) => {
                totalSum += item.pledgedSize;

                return <div
                    key={index}
                    className={styles['pledged-container']}
                >
                    <div className={styles['user-container']}>
                        <img src={item.img} alt='User image'/>
                        <span>{item.name}</span>
                    </div>
                    <span className={styles['pledged-size']}>${item.pledgedSize}</span>
                    <span className={styles['pledged-date']}>{item.dateOfPledged}</span>
                </div>
            })}
            <div className={styles['total-container']}>
                <div className={styles['total']} >{t('pledgedUser.total')}:
                    <span className={styles['pledged-size']}> {total} {t('pledgedUser.users')}</span>
                </div>
                <span className={styles['pledged-size']}>${totalSum}</span>
            </div>

        </div>
    )
}
