import React from "react";
import styles from './production.module.css';
import productionImg from './../../assets/images/production.png';
import PaginatedItems from "../../components/paginate";
import {productionBooksData, productionFilterData} from "../../components/DummyData";



export default () => {
    return (
        <div className={styles['production-main-container']}>
            <img src={productionImg} alt='production image' className={styles['top-img']}/>
            <PaginatedItems
                data={productionBooksData}
                itemsPerPage={8}
                type='production'
                filterData={productionFilterData}/>
        </div>
    )
}