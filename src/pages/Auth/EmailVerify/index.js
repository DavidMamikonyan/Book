import React from "react";
import styles from './emailVerify.module.css';
import emailIcon from './../../../assets/images/emailIcon.png';
import PageTitle from './../../../components/Common/PageTitle';
import Button from './../../../components/Common/UI/Button';
import {useLocation} from "react-router-dom";

export default (props) => {

    const location = useLocation();
    const state = location.state;

    return (
        <div className={styles['main-container']}>
            <div className={styles['container']}>
                <div className={styles['img-container']}>
                    <img src={emailIcon} alt='email icon'/>
                </div>
                <div className={styles['title-container']}>
                    <PageTitle text='Verify your email'/>
                </div>
                <p className={styles['verify-text']}>We’ve sent an email to {state.emailToVerify || 'sjdug6596@gmail.com'} to verify your email address and activate your
                    account.</p>
                <p  className={styles['verify-text']}>
                    <Button type='link'>Clicl here </Button> If you did not receive an email or would like to change the email adress you signed up with.
                </p>
            </div>
        </div>
    )
}