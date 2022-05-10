import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import "./signUp.css";
import SignUpImg from '../../../assets/images/SignUp.png';
import Google from "../../../assets/images/icons/google.png";
import Facebook from "../../../assets/images/icons/facebook.png";
import registerBanner from '../../../assets/images/registration-banner.png';
import Input from "../../../components/Common/UI/Input";
import Button from "../../../components/Common/UI/Button";
import useInput from "../../../hooks/use-input";
import useValidation from "../../../hooks/use-validation";
import useHttp from "../../../hooks/use-http";

const SignUp = () => {

    const {isEmail, isPassword} = useValidation();
    const navigate = useNavigate();
    const location = useLocation();
    const {error, sendRequest: sendUserData} = useHttp();

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
        event.preventDefault();
        // navigate('/email-verify', {
        //     state: {
        //         ...location.state,
        //         emailToVerify:emailValue,
        //     }
        // });
        if (!formIsValid) {
            return
        }

        sendUserData({
            method: 'POST',
            url: 'https://app-2913.herokuapp.com/users',
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
                <img src={SignUpImg} className="img-fluid m-auto" alt=""/>
                <form className="w-100" onSubmit={evt => submitHandler(evt)}>
                    <div className='sign-up-input-container'>
                        <Input
                            label='Email'
                            hasError={emailHasError}
                            errorMessage='Email address is invalid.'
                            input={{
                                id: 'email-phone',
                                type: 'email',
                                onChange: emailChangeHandler,
                                onBlur: emailBlurHandler,
                            }}
                        />
                        <Input
                            label='Password'
                            hasError={passwordHasError}
                            errorMessage='Password is incorrect.'
                            input={{
                                id: 'password',
                                type: 'password',
                                onChange: passwordChangeHandler,
                                onBlur: passwordBlurHandler,
                            }}
                        />
                        <Input
                            label='Confirm password'
                            hasError={reTypePasswordHasError}
                            isMatch={passwordsIsMatch}
                            isTouched={reTypePasswordIsTouched}
                            errorMessage='Password is incorrect.'
                            input={{
                                id: 'confirm-password',
                                type: 'password',
                                onChange: reTypePasswordChangeHandler,
                                onBlur: reTypePasswordBlurHandler,
                            }}
                        />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check"/>
                        <label className="form-check-label" htmlFor="check">
                            I read and agree to
                            <span className="text-green">
                                Terms & Conditions
                            </span>
                        </label>
                    </div>
                    <div className={'btn-container'}>
                        <Button type="primary">Sign up</Button>
                    </div>
                </form>
                <p className="or-signUp">
                    <span>
                        Or
                    </span>
                </p>
                <div className="social_reg">
                    <button className="btn mb-2 w-100">
                        <img src={Google} alt="Google"/>
                        <span className="ml-2">
                            With Google Account
                        </span>
                    </button>
                    <button className="btn mb-2 w-100">
                        <img src={Facebook} alt="Facebook"/>
                        <span className="ml-2">
                            With Facebook
                        </span>
                    </button>
                </div>
                <div className="col-12 text-center">
                    <p>Already have an account? <Link to={'/sign-in'}>SIGN IN</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;