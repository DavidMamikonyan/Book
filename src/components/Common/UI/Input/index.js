import styles from './Input.module.css';
import React, {useState} from "react";
import showHideIcon from './../../../../assets/images/showHide.png';

export default ({dir, input, isMatch = true, label, errorMessage, hasError, isTouched, type}) => {

    const [inputShow, setInputShow] = useState(input.type || 'text');

    const showHideChangeHandler = () => {
        setInputShow(pre => pre === 'password' ? 'text' : 'password')
    };


    return (
        <div className={styles['main-container']}>
            {label && <label htmlFor={input.id} className={styles.label}>{label}</label>}
            {type !== 'textarea' ? <div className={styles['input-container']}>
                <input
                    {...input}
                    type={inputShow}
                    className={dir === 'rtl' ? styles['rtl-style'] : ''}
                />
                {input.type === 'password' &&
                <img src={showHideIcon}
                     alt='show hide'
                     className={styles['show-hide-icon']}
                     onClick={showHideChangeHandler}/>
                }
            </div> : <textarea className={styles['textarea']}/>}
            {hasError && <p className={styles['errorAlert']}>{errorMessage}</p>}
            {!hasError && !isMatch && isTouched && <p className={styles['errorAlert']}>Password is not match!</p>}
        </div>
    )
}