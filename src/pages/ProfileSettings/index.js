import React, {useEffect, useState} from "react";
import styles from './profileSettings.module.css';
import Input from './../../components/Common/UI/Input';
import Button from './../../components/Common/UI/Button';
import Checkbox from './../../components/Common/UI/Checkbox';
import userImg from './../../assets/images/userImgBig.png';
import camera from './../../assets/images/camera.png';
import useValidation from "../../hooks/use-validation";
import useInput from "../../hooks/use-input";
import {useTranslation} from "react-i18next";
import {checkboxData} from "../../components/DummyData";


export default () => {

    const [selectedImage, setSelectedImage] = useState(userImg);
    const [gender, setGender] = useState('Male');
    const {t, i18n} = useTranslation();


    const {isEmail, isPassword} = useValidation();

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset,
        disabled:emailIsDisabled,
    } = useInput(isEmail);
    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameReset,
        disabled:nameIsDisabled,
    } = useInput(isEmail);
    const {
        value: countryValue,
        isValid: countryIsValid,
        hasError: countryHasError,
        valueChangeHandler: countryChangeHandler,
        inputBlurHandler: countryBlurHandler,
        reset: countryReset,
        disabled:countryIsDisabled,
    } = useInput(isEmail);
    const {
        value: birthdayValue,
        isValid: birthdayIsValid,
        hasError: birthdayHasError,
        valueChangeHandler: birthdayChangeHandler,
        inputBlurHandler: birthdayBlurHandler,
        reset: birthdayReset,
        disabled:birthdayIsDisabled,
    } = useInput(isEmail);
    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: passwordReset,
        disabled:passwordIsDisabled,
    } = useInput(isPassword);


    const imageChangeHandler = (evt) => {
        const [file] = evt.target.files;
        setSelectedImage(URL.createObjectURL(file));
    };

    const checkboxHandler = (val) => {
        setGender(val);
    };

    const submitHandler = (evt) => {
        evt.preventDefault();
    };



    return (
        <div className={styles['main-container']}>
            <section className={styles['container']} dir={i18n.dir()}>
                <div className={styles['dir']} dir='ltr'>
                    <span dir='ltr'>{t('profileSettings.account')} > </span>
                    <span dir='ltr'> {t('profileSettings.title')}</span>
                </div>
                <div className={styles['middle-area']}>
                    <span className={styles['title']}>{t('profileSettings.title')}</span>
                    <div className={styles['form-container']}>
                        <div className={styles['image-box']}>
                            <img src={selectedImage} alt='user image'/>
                            <label className={styles['camera-icon']} htmlFor={'camera-icon-id'}>
                                <input id='camera-icon-id' type={"file"} onChange={imageChangeHandler}/>
                                <img src={camera} alt='camera icon'/>
                            </label>
                        </div>
                        <form className={styles['from']} onSubmit={submitHandler}>
                            <Input
                                label={t('common.email')}
                                // hasError={emailHasError}
                                // errorMessage='Email address is invalid.'
                                disabled={true}
                                input={{
                                    id: 'email',
                                    type: 'email',
                                    value: emailIsDisabled ? 'uxuidesigner@gmail.com' : emailValue,
                                    onChange: emailChangeHandler,
                                    onBlur: emailBlurHandler,
                                }}/>
                            <Input
                                label={t('common.name')}
                                // hasError={emailHasError}
                                // errorMessage='Email address is invalid.'
                                disabled={true}
                                input={{
                                    id: 'name',
                                    value: nameIsDisabled ? 'uxuidesigner' : nameValue,
                                    onChange: nameChangeHandler,
                                    onBlur: nameBlurHandler,
                                }}/>
                            <Checkbox title={t('profileSettings.gender')} data={checkboxData}
                                      onChangeGender={checkboxHandler}/>
                            <Input
                                label={t('profileSettings.country')}
                                // hasError={emailHasError}
                                // errorMessage='Email address is invalid.'
                                disabled={true}
                                input={{
                                    id: 'country',
                                    value: countryIsDisabled ? 'Dubai' : countryValue,
                                    onChange: countryChangeHandler,
                                    onBlur: countryBlurHandler,
                                }}/>
                            <Input
                                label={t('profileSettings.bDay')}
                                // hasError={emailHasError}
                                // errorMessage='Email address is invalid.'
                                disabled={true}
                                input={{
                                    id: 'date-of-birthday',
                                    value: birthdayIsDisabled ? '21 apr 1999' : birthdayValue,
                                    onChange: birthdayChangeHandler,
                                    onBlur: birthdayBlurHandler,
                                }}/>
                            <Input
                                label={t('common.password')}
                                // hasError={emailHasError}
                                // errorMessage='Email address is invalid.'
                                disabled={true}
                                input={{
                                    id: 'password',
                                    type: 'password',
                                    value: passwordIsDisabled ? '*************' : passwordValue,
                                    onChange: passwordChangeHandler,
                                    onBlur: passwordBlurHandler,
                                }}/>
                            <div className={styles['button-container']}>
                                <Button type='cancel'>{t('common.cancel')}</Button>
                                <Button type='primary'>{t('common.save')}</Button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    )
}