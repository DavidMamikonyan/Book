import React from "react";
import styles from './pledgeInfo.module.css';
import ProgressBarLine from "../../Common/ProgressBar/ProgressBarLine";

export default (props) => {


    return (
        <div className={styles['main-container']}>
            <div className={styles['info-container']}>
                <div>
                    <span className={styles['odd']}>The goal</span>
                    <span className={`${styles['even']} ${styles['goal']}`}>${props.goal}</span>
                </div>
                <div>
                    <span className={styles['odd']}>Donated</span>
                    <span className={styles['even']}>${props.donated}</span>
                </div>
                <div>
                    <span className={styles['odd']}>Time ends in</span>
                    <span className={styles['even']}>${props.deadline}</span>
                </div>
            </div>
            <ProgressBarLine progress={props.donated / props.goal * 100}/>
            <button>Pledge for this book</button>
        </div>
    )
}