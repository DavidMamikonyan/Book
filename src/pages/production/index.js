import React from "react";
import styles from './production.module.css';
import productionImg from './../../assets/images/production.png';
import Filter from "../../components/Common/Filter";
import PageTitle from "../../components/Common/PageTitle";
import PaginatedItems from "../../components/paginate";
import {productionBooksData, productionFilterData} from "../../components/DummyData";
import {Link} from "react-router-dom";


export default () => {

    return (
        <div className={styles['production-main-container']}>
            <img src={productionImg} alt='production image' className={styles['top-img']}/>
            <PaginatedItems data={productionBooksData}
                            text={"Production"}
                            itemsPerPage={8}
                            ype='production'
                            filterData={productionFilterData}/>
        </div>
    )
}