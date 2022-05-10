import React, {useState} from 'react';
import styles from './popUpPledge.module.css';
import closeIcon from './../../../../assets/images/closeIcon.png';
import ProgressBarLine from "../../../Common/ProgressBar/ProgressBarLine";
import Card from "./Card";
import Input from './../../../Common/UI/Input';
import Button from './../../../Common/UI/Button';
import {useNavigate} from "react-router-dom";


export default (props) => {

    const [selectedCard, setSelectedCard] = useState(true);
    const navigate = useNavigate();

    const cardDetailsOpenHandler = () => {
        navigate('/card-details');
    }


    return (
        <>
            <div className={styles['backdrop']} onClick={props.popUpHandler}/>
            <div className={styles['main-container']}>
                <img src={closeIcon} alt='close icon' className={styles['close-icon']}/>
                <div className={styles['name-container']}>
                    <span>pledge for this book</span>
                    <span>{props.data.name}</span>
                </div>
                <div className={styles['donate-container']}>
                    <div className={styles['goal-donate-deadline']}>
                        <div>
                            <span className={`${styles['odd']} ${styles['goal']}`}>${props.data.goal}</span>
                            <span className={styles['even']}>The goal</span>
                        </div>
                        <div>
                            <span className={styles['odd']}>${props.data.donated}</span>
                            <span className={styles['even']}>Donated</span>
                        </div>
                        <div>
                            <span className={styles['odd']}>{props.data.deadline}</span>
                            <span className={styles['even']}>Time ends in</span>
                        </div>
                    </div>
                    <ProgressBarLine progress={props.data.donated / props.data.goal * 100}/>
                </div>
                <form className={styles['form']}>
                    <Input
                        label='Amount'
                        // hasError={passwordHasError}
                        // errorMessage='Password is incorrect.'
                        input={{
                            placeholder:'$',
                            id: 'amount',
                            // onChange: passwordChangeHandler,
                            // onBlur:passwordBlurHandler,
                        }}/>
                        <Card cardNumber='4561 **** **56' cardName='Mahtamun Hoque' title='Remembered card' selected={selectedCard}/>
                        <div className={styles['line']}/>
                        <Card selected={!selectedCard} onClick={cardDetailsOpenHandler}/>
                        <Button type='primary' disabled={true}>Pledge for this book</Button>
                </form>
            </div>
        </>
    )
}

