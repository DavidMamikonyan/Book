import {Link} from "react-router-dom";
import "./style.signIn.css";
import Input from './../../../components/Common/UI/Input';
import SignInImg from '../../../assets/images/signIn-photo.svg';
import signInBanner from '../../../assets/images/signInBanner.svg';
import Google from "../../../assets/images/icons/google.png";
import Facebook from "../../../assets/images/icons/facebook.png";
import useValidation from "../../../hooks/use-validation";
import useHttp from "../../../hooks/use-http";
import useInput from "../../../hooks/use-input";
import React from "react";

const SignIn = () => {


    const {isEmail, isPassword} = useValidation();
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

    let formIsValid = false;

    if (emailIsValid && passwordIsValid) {
        formIsValid = true;
    }

    const fetchedData = (data) => {
        console.log(data)

    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return
        }

        console.log(11)
        sendUserData({
            method: 'POST',
            url: 'https://app-2913.herokuapp.com/auth',
            data: {
                "email": emailValue,
                "password": passwordValue,
            }
        }, fetchedData);

        emailReset();
        passwordReset();
    };

    return (
        <div className="main-signIn">
            <div className="sign-up-form row">
                <img src={signInBanner} className="img-fluid m-auto" alt=""/>
                <form className="w-100" onSubmit={evt => submitHandler(evt)}>
                    <div className='input-container-sign-up'>
                        <Input
                            label='Email'
                            hasError={emailHasError}
                            errorMessage='Email address is invalid.'
                            input={{
                                id: 'email-phone',
                                type: 'email',
                                onChange: emailChangeHandler,
                                onBlur:emailBlurHandler,
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
                                onBlur:passwordBlurHandler,
                            }}
                        />
                    </div>
                    <span className='sign-in-forgot'>Forgot password?</span>
                    <button type="submit" className="btn btn_sign_in w-100 mt-5 sign-in-btn">Sign in</button>
                </form>
                <p className="or-signIn">
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
                    <p>Don't have an account? <Link to={'/sign-up'}>SIGN UP</Link></p>
                </div>
            </div>
            <div className="sign-in-photo">
                <img src={SignInImg} alt="sign-in"/>
                <p>Welcome back</p>
            </div>
        </div>
    );
}

export default SignIn;