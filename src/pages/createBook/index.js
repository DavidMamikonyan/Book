import React, {useReducer} from "react";
import styles from './createBook.module.css';
import PageTitle from './../../components/Common/PageTitle'
import Input from "../../components/Common/UI/Input";
import Button from "../../components/Common/UI/Button";
import SwitchLang from "../../components/Common/Switch/SwitchLang";
import {langData} from "../../components/DummyData";
import lang from './../../assets/language/lang.json';




const initialState = {
    dir: 'ltr',
    lang: lang.createBookEng,


};


const langChangeReducer = (state, action) => {
    switch (action.type) {
        case 0 :
            return {
                ...state,
                dir:'ltr',
                lang: lang.createBookEng,
            }
            break;
        case 1 :
            return {
                ...state,
                dir: 'rtl',
                lang: lang.createBookArabic,
            }
            break;
        default:
            return state;
    }
}

export default () => {

    const [changeLang, dispatchChangeLang] = useReducer(langChangeReducer, initialState);

    const langChangeHandler = (index) => {
        dispatchChangeLang({type: index})
    };


    return (
        <div dir={changeLang.dir} className={styles['main-container']}>
            <div className={styles['container']}>
                <PageTitle text={changeLang.lang.pageTitle}/>
                <p className={styles['description']}>{changeLang.lang.info}</p>
                <form className={styles['form']}>
                    <Input

                        label={changeLang.lang.bookName}
                        dir={changeLang.dir}
                        // hasError={emailHasError}
                        // errorMessage='Email address is invalid.'
                        input={{
                            id: 'book-name',
                            type: 'text',
                            // onChange: emailChangeHandler,
                            // onBlur:emailBlurHandler,
                        }}
                    />
                    <Input
                        label={changeLang.lang.author}
                        dir={changeLang.dir}
                        // hasError={passwordHasError}
                        // errorMessage='Password is incorrect.'
                        input={{
                            id: 'author',
                            // onChange: passwordChangeHandler,
                            // onBlur:passwordBlurHandler,
                        }}
                    />
                    <Input
                        label={changeLang.lang.year}
                        dir={changeLang.dir}
                        // hasError={passwordHasError}
                        // errorMessage='Password is incorrect.'
                        input={{
                            id: 'year-of-production',
                            // onChange: passwordChangeHandler,
                            // onBlur:passwordBlurHandler,
                        }}
                    />
                    <Input
                        label={changeLang.lang.ISBN}
                        dir={changeLang.dir}
                        // hasError={passwordHasError}
                        // errorMessage='Password is incorrect.'
                        input={{
                            id: 'ISBN',
                            // onChange: passwordChangeHandler,
                            // onBlur:passwordBlurHandler,
                        }}
                    />
                    <div>
                        <Input
                            label={changeLang.lang.pledge}
                            dir={changeLang.dir}
                            // hasError={passwordHasError}
                            // errorMessage='Password is incorrect.'
                            input={{
                                id: 'your-kickoff-pledge',
                                placeholder: '$',
                                // onChange: passwordChangeHandler,
                                // onBlur:passwordBlurHandler,
                            }}
                        />
                        <span>{changeLang.lang.pledgeInfo}</span>
                    </div>
                    <div className={styles['btn-container']}>
                        <Button type='primary'>{changeLang.lang.btnText}</Button>
                    </div>
                </form>
                <div  dir='ltr' className={styles['switch-lang']}>
                    <SwitchLang data={langData} onChangeHandler={langChangeHandler}/>
                </div>
            </div>
        </div>
    )
}