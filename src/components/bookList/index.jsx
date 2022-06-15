import SingleBookComponent from '../SingleBook';
import PageTitle from './../Common/PageTitle';
import {Link, useLocation} from 'react-router-dom';
import styles from './bookList.module.css';
import React from "react";
import Filter from "../Common/Filter";
import {useTranslation} from "react-i18next";

const BookList = ({data, type, filterData}) => {


    const location = useLocation();
    const {t} = useTranslation();
    let text = ''

    const indexOfLastPost = 4;
    const indexOfFirstPost = indexOfLastPost - 4;

    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);


    switch (type) {
        case 'project':
            text = 'bookList.projectTitle';
            break;
        case 'successfulProject' :
            text = 'bookList.successfulTitle';
            break;
        case 'production' :
            text = 'bookList.productionTitle';
            break;
        case "library":
            text = 'bookList.libraryTitle';
            break;
        default:
            text = 'bookList.projectTitle';
    }


    return (
        <div className={styles['main-book-list']}>
            {/*<div className={styles['audio-header-photo']}>*/}
            <div className={styles['book-list-head']}>
                <PageTitle text={t(text)}/>
                {type === 'project' && <p>{t('bookList.subTitle')}</p>}
            </div>
            {/*</div>*/}
            {filterData && <div className={styles['filter-container']}>
                <Filter dd_data={filterData}/>
            </div>}
            <div className={styles['book-list']}>
                {location.pathname === '/' ? currentPosts.map(item =>
                        <SingleBookComponent key={item.id} {...item} type={type}/>)
                    : data.map(item => <SingleBookComponent key={item.id} {...item} type={type}/>)}
                <Link to="/create-book" id={styles["start-project"]}>{t('common.startYourProject')}</Link>
            </div>
            {location.pathname === '/' && (type === 'project' || type === 'production') &&
            <Link to={"/projects"} className={styles['view-btn']} children={t('bookList.viewAll')}/>}
        </div>
    )
}

export default BookList