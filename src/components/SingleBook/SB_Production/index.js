import React from "react";
import styles from './SB_Production.module.css';

export default ({item}) => {
    return(
        <div className={styles['production-area']}>
            <div>
                <span className={styles['status']}>Status</span>
                <span className={styles['status-value']}>{item.status}</span>
            </div>
            <div>
                <span className={styles['ready-in']}>Audio book ready in</span>
                <span className={styles['ready-in-value']}>{item.deadline}</span>
            </div>
        </div>
    )
}