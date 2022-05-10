import React from "react";
import styles from './SB_Library.module.css';

export default ({item}) => {
    return (
        <div className={styles['container']}>
            <div>
                <span>Narrator</span>
                <span>{item.narrator}</span>
            </div>
            <div>
                <span>Genre</span>
                <span>{item.genre}</span>
            </div>
            <div>
                <span>Year of publication</span>
                <span>{item.publicYear}</span>
            </div>
        </div>
    )
}