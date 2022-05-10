import SingleBookComponent from '../SingleBook';
import PageTitle from './../Common/PageTitle';
import {Link, useLocation} from 'react-router-dom';
import styles from './bookList.module.css';
import React from "react";
import Filter from "../Common/Filter";

const BookList = ({text, data, type, filterData}) => {


    const location = useLocation();


    const indexOfLastPost = 4;
    const indexOfFirstPost = indexOfLastPost - 4;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);


    return (
        <div className={styles['main-book-list']}>
            {/*<div className={styles['audio-header-photo']}>*/}
                <div className={styles['book-list-head']}>
                    <PageTitle text={text}/>
                    {text === 'Projects' && <p>Help to start creating Audio book for arabic books</p>}
                </div>
            {/*</div>*/}
            {filterData && <div className={styles['filter-container']}>
                <Filter dd_data={filterData}/>
            </div>}
            <div className={styles['book-list']}>
                {location.pathname === '/' ? currentPosts.map(item =>
                        <SingleBookComponent key={item.id} {...item} type={type}/>)
                    : data.map(item => <SingleBookComponent key={item.id} {...item} type={type}/>)}
                <Link to="/create-book" id={styles["start-project"]}>start your project</Link>
            </div>
            {location.pathname === '/' && (text === 'Projects' || text === 'Productions') &&
            <Link to={"/projects"} className={styles['view-btn']} children='View All'/>}
        </div>
    )
}

export default BookList