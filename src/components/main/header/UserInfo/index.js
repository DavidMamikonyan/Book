import React, {useState} from "react";
import styles from './userInfo.module.css';
import userImg from './../../../../assets/images/userImage.png';
import arrowDown from './../../../../assets/images/arrowDownTwo.png';
import {ddItemsUser} from "../../../DummyData";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {authActions} from "../../../../redux/slice/auth";
import {useDispatch} from "react-redux";

export default () => {


    const [ddIsOpen, setDDIsOpen] = useState(false);
    const navigate = useNavigate();
    const {t} = useTranslation();
    const dispatch = useDispatch();


    const ddOpenHandler = () => {
        setDDIsOpen(pre => !pre)
    };



    const ddItems = ddItemsUser.map((item, index) =>
        <li
            key={index}
            className={styles['dd-item']}
        >
            <Link
                className={styles['link']}
                to={item.url}
                onClick={() => {
                    ddItemsUser.length - 1 === index && dispatch(authActions.removeToken())
                    setDDIsOpen(pre => !pre)
                }}
            >{t(`profile.${item.title}`)}</Link>
        </li>);

    return (
        <div className={styles['main-container']}>
            <img src={userImg} alt='user image' className={styles['user-img']} onClick={() => navigate('/my-account')}/>
            <span>User name</span>
            <img src={arrowDown} alt='arrow down' onClick={ddOpenHandler} className={styles['arrow-icon']}/>
            {ddIsOpen && <>
                <div className={styles['backdrop']} onClick={ddOpenHandler}/>
                <ul className={styles['dd-items-container']}>{ddItems}</ul>
            </>}
        </div>
    )
}