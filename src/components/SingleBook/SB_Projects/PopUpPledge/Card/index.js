import React from "react";
import styles from './card.module.css';
import visaIcon from './../../../../../assets/images/visaIcon.png';
import trashIcon from './../../../../../assets/images/trashIcon.png';

export default (props) => {
    return (
        <div className={styles['main-container']}>
            <span>{props.title}</span>
            <div className={styles['container']} onClick={props.onClick}>
                <div className={styles['radio-btn']}>
                    <div className={`${props.selected && styles['radio-btn-circle']}`}/>
                </div>
                {props.cardName ? <div className={styles['card-info-container']}>
                    <div>
                        <img src={visaIcon} alt='card icon' className={styles['card-icon']}/>
                        <div className={styles['card-info']}>
                            <span>{props.cardNumber}</span>
                            <span>{props.cardName}</span>
                        </div>
                    </div>
                    <img src={trashIcon} alt='trash icon'/>
                </div> : <span className={styles['new-card']}>Use new card</span>}
            </div>
        </div>
    )
}