import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import "./signUp.css";
import Google from "../../../assets/images/icons/google.png";
import Facebook from "../../../assets/images/icons/facebook.png";
import registerBanner from '../../../assets/images/registration-banner.png';
import Input from "../../../components/Common/UI/Input";
import Button from "../../../components/Common/UI/Button";
import PageTitle from "../../../components/Common/PageTitle";
import useInput from "../../../hooks/use-input";
import useValidation from "../../../hooks/use-validation";
import useHttp from "../../../hooks/use-http";
import {useTranslation} from "react-i18next";


const SignUp = () => {

    const {isEmail, isPassword} = useValidation();
    const navigate = useNavigate();
    const location = useLocation();
    const {error, sendRequest: sendUserData} = useHttp();
    const {t, i18n} = useTranslation();

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset,
    } = useInput(isEmail);
    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: passwordReset,
    } = useInput(isPassword);
    const {
        value: reTypePasswordValue,
        isValid: reTypePasswordIsValid,
        hasError: reTypePasswordHasError,
        valueChangeHandler: reTypePasswordChangeHandler,
        inputBlurHandler: reTypePasswordBlurHandler,
        reset: reTypePasswordReset,
        isTouched: reTypePasswordIsTouched,
    } = useInput(isPassword);

    let formIsValid = false;
    let passwordsIsMatch = false;
    passwordValue === reTypePasswordValue && (passwordsIsMatch = true)

    if (emailIsValid && passwordIsValid && reTypePasswordIsValid) {
        formIsValid = true;
    }

    const fetchedData = (data) => {
        console.log(data, 'data fetched')

    };

    const submitHandler = (event) => {
        console.log(56545)
        event.preventDefault();
        navigate('/email-verify', {
            state: {
                ...location.state,
                emailToVerify: emailValue,
            }
        });
        if (!formIsValid) {
            return
        }

        sendUserData({
            method: 'POST',
            url: 'http://34.229.195.200:3000/users',
            data: {
                "email": emailValue,
                "password": passwordValue,
            }
        }, fetchedData);

        emailReset();
        passwordReset();
        reTypePasswordReset();

    };

    return (
        <div className="main-signup">
            <div className="banner-img-cont">
                <img src={registerBanner} className="registration-banner" alt="reg"/>
            </div>
            <div className="sign-up-form row">
                <PageTitle text={t('common.signUp')}/>
                <form className="w-100" onSubmit={evt => submitHandler(evt)} dir={i18n.dir()}>
                    <div className='sign-up-input-container'>
                        <Input
                            label={t('common.email')}
                            hasError={emailHasError}
                            errorMessage='Email address is invalid.'
                            input={{
                                id: 'email-phone',
                                type: 'email',
                                value: emailValue,
                                onChange: emailChangeHandler,
                                onBlur: emailBlurHandler,
                            }}
                        />
                        <Input
                            label={t('common.password')}
                            hasError={passwordHasError}
                            errorMessage='Password must be 8 characters or more, have upper and lower case letters, numbers, and special characters.'
                            input={{
                                id: 'password',
                                type: 'password',
                                value: passwordValue,
                                onChange: passwordChangeHandler,
                                onBlur: passwordBlurHandler,
                            }}
                        />
                        <Input
                            label={t('signUp.confirmPass')}
                            hasError={reTypePasswordHasError}
                            isMatch={passwordsIsMatch}
                            isTouched={reTypePasswordIsTouched}
                            errorMessage='Password must be 8 characters or more, have upper and lower case letters, numbers, and special characters.'
                            input={{
                                id: 'confirm-password',
                                type: 'password',
                                value: reTypePasswordValue,
                                onChange: reTypePasswordChangeHandler,
                                onBlur: reTypePasswordBlurHandler,
                            }}
                        />
                    </div>
                    <div className="form-check-signUp">
                        <input type="checkbox" className="form-check-input" id="check"/>
                        <label className="form-check-label" htmlFor="check">
                            {t('signUp.readAgree')}
                            <span className="text-green">
                                {t('signUp.terms')}
                            </span>
                        </label>
                    </div>
                    <div className={'btn-container'}>
                        <Button disabled={!formIsValid} type="primary">{t('common.signUp')}</Button>
                    </div>
                </form>
                <p className="or-signUp">
                    <span>{t('common.or')}</span>
                </p>
                <div className="social_reg">
                    <button className="btn mb-2 w-100">
                        <img src={Google} alt="Google"/>
                        <span className="ml-2">{t('common.wGoogle')} </span>
                    </button>
                    <button className="btn mb-2 w-100">
                        <img src={Facebook} alt="Facebook"/>
                        <span className="ml-2">{t('common.wFacebook')}</span>
                    </button>
                </div>
                <div className="col-12 text-center">
                    <p>{t('signUp.haveAccount')}<Link to={'/sign-in'}>{t('common.signIn')}</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;