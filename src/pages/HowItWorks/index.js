import React from "react";
import styles from './howItWorks.module.css';
import PageTitle from './../../components/Common/PageTitle';
import SingleStep from './SingleStep';
import {howItWorksStepData} from "../../components/DummyData";

export default () => {


    return (
        <div className={styles['main-container']}>
            <PageTitle text='How it works'/>
            <div className={styles['container']}>
                <div className={styles['steps-container']}>
                    {howItWorksStepData.map((item, index) =>
                        <SingleStep
                            // lastItem={index === howItWorksStepData.length - 1}
                            index={index}
                            data={item}
                            key={index}/>
                    )}
                </div>
            </div>
        </div>
    )
}