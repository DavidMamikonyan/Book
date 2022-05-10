import React from "react";
import styles from './singleStep.module.css';
import arrowRight from "../../../assets/images/arrowRight.png";

export default (props) => {

    let stepBordersArea = 'border-top-solid';
    let arrowBox = 'arrow-box-bottom';

    if (props.index % 2 !== 0) {
        stepBordersArea = 'border-top-dashed';
        arrowBox = 'arrow-box-top';
    }


    return (
        <div className={styles['step-box']}>
            <div className={`${styles['border-area']} ${styles[stepBordersArea]}`}>
                <div className={styles['step']}>{props.data.text}</div>
                {props.index !== 3 && <div className={styles[arrowBox]}>
                    <img src={arrowRight} alt='arrow right' />
                </div>}
            </div>
        </div>
    )
}