import React from "react";
import FundComponent from '../fund-component';
import PageTitle from './../Common/PageTitle';
import styles from './funding.module.css';
import {useTranslation} from "react-i18next";
import {fundData} from "../DummyData";


const FundingInfo = () => {

    const {t} = useTranslation();

    return (
        <div className={styles['main-fund']}>
            <div className={styles["fund-head"]}>
                <div className={styles['page-title-container']}>
                    <PageTitle text={t('howItWorks.title')}/>
                </div>
                <p>{t('howItWorks.description')}</p>
            </div>
            <div className={styles['fund-list']}>
                {fundData.map(item => <FundComponent key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default FundingInfo