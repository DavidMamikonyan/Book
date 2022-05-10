import React from "react";
import {GlobalContext} from '../../context';
import FundComponent from '../fund-component';
import PageTitle from './../Common/PageTitle';
import styles from './funding.module.css';


const FundingInfo = () => {
    const {fundData} = GlobalContext();

    return (
        <div className={styles['main-fund']}>
            <div className={styles["fund-head"]}>
                <div className={styles['page-title-container']}>
                    <PageTitle text='How to Funding'/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </p>
            </div>
            <div className={styles['fund-list']}>
                {fundData.map(item => <FundComponent key={item.id} {...item}/>)}
            </div>
        </div>
    )
}

export default FundingInfo