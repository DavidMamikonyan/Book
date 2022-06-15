import React from "react";
import styles from './filter.module.css';
import filterIcon from './../../../assets/images/filterIcon.png';
import Search from './../Search'
import DropDown from './../DropDown'
import {useTranslation} from "react-i18next";

export default (props) => {

    const {t} = useTranslation();

    return (
        <div className={styles['filter-main-container']}>
            <div className={styles['container']}>
                <div>
                    <div className={styles['filter-by']}>
                        <img src={filterIcon} alt='filter icon'/>
                        <span>{t('filter.filter')}</span>
                    </div>

                    <Search/>
                </div>
                {props.dd_data.map((item, index) =>
                    <div
                        className={styles['status-container']}
                        key={index}
                    >
                        <span>{t(`filter.${item.id}`)}</span>
                        <DropDown data={{
                            placeholder: item.placeholder,
                            dropMenuItems: item.dd_menu_items,
                        }}/>
                    </div>)}
            </div>


        </div>
    )
}
