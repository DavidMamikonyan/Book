import React, { useEffect, useReducer, useState, useRef } from "react";
import styles from "./createBook.module.css";
import PageTitle from "./../../components/Common/PageTitle";
import Input from "../../components/Common/UI/Input";
import Button from "../../components/Common/UI/Button";
import useInput from "../../hooks/use-input";
import useValidation from "../../hooks/use-validation";
import useHttp from "../../hooks/use-http";
import { useSelector } from "react-redux";

export default () => {
  const [message, setMessage] = useState(false);
  const divEl = useRef(null);
  const { isEmail, isName, isNumber } = useValidation();
  const { error, sendRequest: sendUserData } = useHttp();
  const auth = useSelector((state) => state.auth);

  // useEffect(() => {
  //
  //
  //     const fetchedData = (data) => {
  //         console.log(data)
  //         // localStorage.setItem('access_token', JSON.stringify(data.data['access_token']));
  //         // navigate('/')
  //     };
  //
  //
  //     sendUserData({
  //         method: 'GET',
  //         url: 'http://54.209.204.15:3000/books/getAllNotifications',
  //         // data: {
  //         //     "email": emailValue,
  //         //     "password": passwordValue,
  //         // }
  //     }, fetchedData);
  //
  //
  // }, [])

  const {
    value: bookValue,
    isValid: bookIsValid,
    hasError: bookHasError,
    valueChangeHandler: bookChangeHandler,
    inputBlurHandler: bookBlurHandler,
    reset: bookReset,
  } = useInput(isName);
  const {
    value: bookArValue,
    isValid: bookArIsValid,
    hasError: bookArHasError,
    valueChangeHandler: bookArChangeHandler,
    inputBlurHandler: bookArBlurHandler,
    reset: bookArReset,
  } = useInput(isName);
  const {
    value: authorArValue,
    isValid: authorArIsValid,
    hasError: authorArHasError,
    valueChangeHandler: authorArChangeHandler,
    inputBlurHandler: authorArBlurHandler,
    reset: authorArReset,
  } = useInput(isName);
  const {
    value: authorValue,
    isValid: authorIsValid,
    hasError: authorHasError,
    valueChangeHandler: authorChangeHandler,
    inputBlurHandler: authorBlurHandler,
    reset: authorReset,
  } = useInput(isName);
  const {
    value: yearValue,
    isValid: yearIsValid,
    hasError: yearHasError,
    valueChangeHandler: yearChangeHandler,
    inputBlurHandler: yearBlurHandler,
    reset: yearReset,
  } = useInput(isNumber);
  const {
    value: ISBNValue,
    isValid: ISBNIsValid,
    hasError: ISBNHasError,
    valueChangeHandler: ISBNChangeHandler,
    inputBlurHandler: ISBNBlurHandler,
    reset: ISBNReset,
  } = useInput(isNumber);
  const {
    value: pledgeValue,
    isValid: pledgeIsValid,
    hasError: pledgeHasError,
    valueChangeHandler: pledgeChangeHandler,
    inputBlurHandler: pledgeBlurHandler,
    reset: pledgeReset,
  } = useInput(isNumber);

  let formIsValid = false;

  if (
    bookIsValid &&
    authorIsValid &&
    yearIsValid &&
    ISBNIsValid &&
    pledgeIsValid &&
    authorArIsValid &&
    bookArIsValid
  ) {
    formIsValid = true;
  }

  const fetchedData = (data) => {
    setMessage(!message);
    divEl.current.style.padding = "80px 100px";
    divEl.current.style.top = "200px"
  };

  const closePopUpHandler = (e) => {
    if (e.target.className != "pop_up" && message) {
        setMessage(!message)
        divEl.current.style.padding = "0px";
    }
    
  }

  const submitHandler = (event) => {
    console.log(56545);
    event.preventDefault();
    console.log(message);
    // navigate('/email-verify', {
    //     state: {
    //         ...location.state,
    //         emailToVerify: emailValue,
    //     }
    // });
    if (!formIsValid) {
      return;
    }
    console.log("formIsValid is true ");

    sendUserData(
      {
        method: "POST",
        url: "http://34.229.195.200:3000/books/createNotification",
        data: {
          nameEnglish: bookValue,
          nameArabic: bookArValue,
          authorEnglish: authorValue,
          authorArabic: authorArValue,
          yearOfPublishing: yearValue,
          ISBN: ISBNValue,
          kickoffPledge: pledgeValue,
        },
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      },
      fetchedData
    );
  };
  console.log(divEl.current);
  // creating book from frontEnd part -> POST request -> ServerLink/books/createBookNotification
  // Sending:
  //     Bearer token (Authorization header)
  // nameEnglish (string)
  // nameArabic (string)
  // authorEnglish (string)
  // authorArabic (string)
  // yearOfPublishing (number)
  // ISBN (string)
  // kickoffPledge (number, minimum 100)
  //
  // Getting:
  // {message: 'success'} -> if success
  // {message: 'error'} -> if something went wrong

  return (
    <div className={styles["main-container"]} onClick={closePopUpHandler}>
      <div className={styles["container"]}>
        <PageTitle text="Champion a book production" />
        <p className={styles["description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <form className={styles["form"]} onSubmit={submitHandler}>
          <Input
            label="Book name"
            hasError={bookHasError}
            errorMessage="Book name is invalid."
            input={{
              value: bookValue,
              id: "book-name",
              type: "text",
              onChange: bookChangeHandler,
              onBlur: bookBlurHandler,
            }}
          />
          <Input
            label="عنوان الكتاب"
            dir="rtl"
            hasError={bookArHasError}
            errorMessage="Book name is invalid."
            input={{
              value: bookArValue,
              id: "book-name-ar",
              type: "text",
              onChange: bookArChangeHandler,
              onBlur: bookArBlurHandler,
            }}
          />
          <Input
            label="Author"
            hasError={authorHasError}
            errorMessage="Author name must have one uppercase character."
            input={{
              value: authorValue,
              id: "author",
              onChange: authorChangeHandler,
              onBlur: authorBlurHandler,
            }}
          />
          <Input
            label="الكاتب"
            dir="rtl"
            hasError={authorArHasError}
            errorMessage="Author name must have one uppercase character."
            input={{
              value: authorArValue,
              id: "author-ar",
              onChange: authorArChangeHandler,
              onBlur: authorArBlurHandler,
            }}
          />
          <Input
            label="Year of production"
            hasError={yearHasError}
            errorMessage="Year of production must be 4 characters , numbers."
            input={{
              value: yearValue,
              id: "year-of-production",
              onChange: yearChangeHandler,
              onBlur: yearBlurHandler,
            }}
          />
          <Input
            label="ISBN"
            hasError={ISBNHasError}
            errorMessage="ISBN must be numbers."
            input={{
              value: ISBNValue,
              id: "ISBN",
              type: "number",
              onChange: ISBNChangeHandler,
              onBlur: ISBNBlurHandler,
            }}
          />
          <div>
            <Input
              label="Your kickoff pledge"
              hasError={pledgeHasError}
              errorMessage="Kickoff pledge must be numbers."
              input={{
                value: pledgeValue,
                id: "your-kickoff-pledge",
                placeholder: "$",
                type: "number",
                onChange: pledgeChangeHandler,
                onBlur: pledgeBlurHandler,
              }}
            />
            <span>That it should be $100 or more</span>
          </div>
          <div className={styles["btn-container"]}>
            <Button type="primary">send a request</Button>
          </div>
        </form>
      </div>
      <div
        ref={divEl}
        className="pop_up"
        style={{
          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translate(-50%, 50%)",
          background: "white",
          //   padding: "60px 100px",
        }}
      >
        <h3 style={{ color: "green" }}>
          {message &&
            "After confirmation we will send you message to your email"}
        </h3>
      </div>
    </div>
  );
};
