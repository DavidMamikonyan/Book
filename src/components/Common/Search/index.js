import React from "react";
import styles from './search.module.css';
import searchIcon from "../../../assets/images/searchIcon.png";
import {useTranslation} from "react-i18next";

export default () => {

    const {t} = useTranslation();

    return (
        <div className={styles['search-container']}>
            <input placeholder={t('header.searchPl')} id='searchId'/>
            <label className={styles['img-container']} htmlFor='searchId'>
                <img src={searchIcon} alt='search icon'/>
            </label>
        </div>

    )
}