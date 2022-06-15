import React, {useState} from 'react';
import styles from './popUpPledge.module.css';
import closeIcon from './../../../../assets/images/closeIcon.png';
import ProgressBarLine from "../../../Common/ProgressBar/ProgressBarLine";
import Card from "./Card";
import Input from './../../../Common/UI/Input';
import Button from './../../../Common/UI/Button';
import {useNavigate} from "react-router-dom";
import useInput from "../../../../hooks/use-input";


export default (props) => {

    const [selectedCard, setSelectedCard] = useState(true);
    const navigate = useNavigate();

    const {
        // value: amountValue,
        isValid: amountIsValid,
        hasError: amountHasError,
        valueChangeHandler: amountChangeHandler,
        inputBlurHandler: amountBlurHandler,
        reset: amountReset,
    } = useInput((val) => val >= 100 );

    let formIsValid = false;

    if (amountIsValid) {
        formIsValid = true;
    }


    const cardDetailsOpenHandler = () => {
        navigate('/card-details');
    };

    const submitHandler = (evt) => {
        evt.preventDefault();

        if(!formIsValid) {
            return;
        }

        amountReset();
    }


    return (
        <>
            <div className={styles['backdrop']} onClick={props.popUpHandler}/>
            <div className={styles['main-container']}>
                <img src={closeIcon} alt='close icon' className={styles['close-icon']} onClick={props.popUpHandler}/>
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
                <form className={styles['form']} onSubmit={(evt) => submitHandler(evt)}>
                    <Input
                        label='Amount'
                        hasError={amountHasError}
                        errorMessage='Amount must be 100$ or more.'
                        input={{
                            placeholder:'$',
                            id: 'amount',
                            onChange: amountChangeHandler,
                            onBlur:amountBlurHandler,
                        }}/>
                        <Card cardNumber='4561 **** **56' cardName='Mahtamun Hoque' title='Remembered card' selected={selectedCard}/>
                        <div className={styles['line']}/>
                        <Card selected={!selectedCard} onClick={cardDetailsOpenHandler}/>
                        <Button type='primary' disabled={!formIsValid}>Pledge for this book</Button>
                </form>
            </div>
        </>
    )
}

