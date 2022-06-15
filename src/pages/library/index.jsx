import styles from './library.module.css';
import libTopImg from '../../assets/images/library-top-img.png'
import PaginatedItems from './../../components/paginate/index';
import {libraryBooksData, libraryFilterData} from "../../components/DummyData";
import React from "react";


const Library = () => {

    return (
        <div className={styles['main-library-container']}>
            <img src={libTopImg} alt="lib-text" className={styles['top-img']}/>
            <PaginatedItems data={libraryBooksData} itemsPerPage={8} type='library' filterData={libraryFilterData}/>
        </div>
    )
}

export default Library