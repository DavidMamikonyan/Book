import React from "react";
import styles from './pledged.module.css';


export default (props) => {

    const total = props.data.length;
    let totalSum = 0;

    return (
        <div className={styles['main-container']}>
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
                <span className={styles['total']}>Total:
                    <span className={styles['pledged-size']}> {total} users</span>
                </span>
                <span className={styles['pledged-size']}>${totalSum}</span>
            </div>

        </div>
    )
}
