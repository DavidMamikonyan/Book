import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import styles from "./header.module.css";
import Search from './../../Common/Search';
import Button from './../../Common/UI/Button';
import NavBar from './NavBar';
import LangDropDown from './LangDropDown';
import UserInfo from './UserInfo';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

export default () => {

    const {t} = useTranslation();
    const auth = useSelector(state => state.auth)


    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <Link to={'/'}>
                    <div className={styles["logo"]}>LOGO</div>
                </Link>
                {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                {/*        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                {/*        aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"/>*/}
                {/*</button>*/}

                {/*<div className={styles["navbar_collapse"]} id="navbarSupportedContent">*/}
                <NavBar/>
                <div className={styles['search-sign-container']}>
                    <div className={styles['search-side']}>
                        <Search/>
                        <LangDropDown/>
                    </div>
                    {auth.accessToken === null && <div className={styles['header-button-container']}>
                        <Button type='text' url={'/sign-up'}>{t('common.signUp')}</Button>
                        <Button type='primary' url={'/sign-in'}>{t('common.signIn')}</Button>
                    </div>}
                    {auth.accessToken && <UserInfo/>}
                </div>
            </div>
        </header>
    )
}
