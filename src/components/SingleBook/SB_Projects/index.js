import React, {useState} from "react";
import styles from './SB_Projects.module.css';
import ProgressBarLine from "../../Common/ProgressBar/ProgressBarLine";
import Button from "../../Common/UI/Button";
import PopUpPledge from "./PopUpPledge";
import {useTranslation} from "react-i18next";

export default ({item}) => {

    const [popUpIsOpen, setPopUpIsOpen] = useState(false);
    const {t} = useTranslation();

    const popUpOpenHandler = () => {
        setPopUpIsOpen(pre => !pre);
    };




    return(
        <div className={styles['projects-area']}>
            <div className={styles['book-info']}>
                <div>
                    <span className={`${styles['book-info-values']} ${styles['goal']}`}>${item.goal}</span>
                    <span className={styles['book-info-titles']}>{t('singleBook.goal')}</span>
                </div>
                <div>
                    <span className={styles['book-info-values']}>${item.donated}</span>
                    <span className={styles['book-info-titles']}>{t('singleBook.donated')}</span>
                </div>
                <div>
                    <span className={styles['book-info-values']}>{item.deadline}</span>
                    <span className={styles['book-info-titles']}>{t('singleBook.time')}</span>
                </div>
            </div>
            <ProgressBarLine progress={item.donated / item.goal * 100}/>
            <Button type='link' onClick={popUpOpenHandler}>{t('common.pledge')}</Button>
            {popUpIsOpen && <PopUpPledge
                popUpHandler={popUpOpenHandler}
                data={{
                    goal:item.goal,
                    donated:item.donated,
                    deadline:item.deadline,
                    name:item.name,
                }}
            /> }
        </div>
    )
}