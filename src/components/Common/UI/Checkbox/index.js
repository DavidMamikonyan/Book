import React, {useState} from "react";
import styles from './checkbox.module.css';
import checkedIcon from './../../../../assets/images/checked.png';
import {useTranslation} from "react-i18next";

export default ({title, data, onChangeGender}) => {

    const [active , setActive] = useState(0);
    const {t} = useTranslation();

    const checkedToggle = (val) => {
        setActive(pre => val);
        onChangeGender(data[val].text)
    };



    return (
        <div className={styles['main-container']}>
            <span className={styles['title']}>{title}</span>
            <div className={styles['check-boxes-container']}>
                {data.map((item, index) => {

                   return <div
                        key={index}
                        className={styles['check-box-container']}
                    >
                        <div className={`${styles['check-box']} ${index === active && styles['checked']}`}
                             onClick={() => checkedToggle(index)}>
                            {index === active && <img src={checkedIcon} alt='checked icon'/>}
                        </div>
                        <span>{t(`profileSettings.${item.text}`)}</span>
                    </div>
                })}
            </div>

        </div>
    )
}