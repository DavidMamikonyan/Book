import React from "react";
import styles from './navBar.module.css';
import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default () => {

    const {t} = useTranslation();

    const location = useLocation();


    return (
        <nav className={styles['nav-container']}>
            <ul className={styles["nav-bar"]}>
                <li className={` ${styles["nav-link"]} ${location.pathname === '/about-us' && styles['active']}`}>
                    <Link to={'/admin'}>{t('header.aboutUs')}</Link>
                </li>
                <li className={` ${styles["nav-link"]} ${location.pathname === '/how-it-works' && styles['active']}`}>
                    <Link to={'/how-it-works'}>{t('header.howItWorks')}</Link>
                </li>
                <li className={` ${styles["nav-link"]} ${location.pathname === '/projects' && styles['active']}`}>
                    <Link to={'/projects'}>{t('header.projects')}</Link>
                </li>
                <li className={` ${styles["nav-link"]} ${location.pathname === '/production' && styles['active']}`}>
                    <Link to={'/production'}>{t('header.production')}</Link>
                </li>
                <li className={` ${styles["nav-link"]} ${location.pathname === '/create-book' && styles['active']}`}>
                    <Link to={'/create-book'}>{t('header.startProject')}</Link>
                </li>
                <li className={` ${styles["nav-link"]} ${location.pathname === '/library' && styles['active']}`}>
                    <Link to='/library'>{t('header.library')}</Link>
                </li>
                <li className={` ${styles["nav-link"]} ${location.pathname === '/contact-us' && styles['active']}`}>
                    <Link to={'/contact-us'}>{t('header.contactUs')}</Link>
                </li>
            </ul>
        </nav>
    )
}
