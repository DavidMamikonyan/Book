import React from "react";
import styles from './search.module.css';
import searchIcon from "../../../assets/images/searchIcon.png";

export default () => {


    return (
        <div className={styles['search-container']}>
            <input placeholder='Search' id='searchId'/>
            <label className={styles['img-container']} htmlFor='searchId'>
                <img src={searchIcon} alt='search icon'/>
            </label>
        </div>

    )
}