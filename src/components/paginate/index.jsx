import React, {useEffect, useState} from 'react'
import ReactPaginate from "react-paginate";
import BookList from '../bookList';
import styles from './paginate.module.css'

function PaginatedItems({data, itemsPerPage, text, type, filterData}) {


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % data.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <div className={styles['main-container']}>
            <BookList text={text} data={currentItems} type={type} filterData={filterData}/>
            <ReactPaginate
                nextLabel="Next >>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<< Back"
                pageClassName={styles["page-item"]}
                pageLinkClassName={styles["page-link"]}
                previousClassName={styles["page-item"]}
                previousLinkClassName={styles["page-link"]}
                nextClassName={styles["page-item"]}
                nextLinkClassName={styles["page-link"]}
                breakLabel="..."
                breakClassName={styles["page-item"]}
                breakLinkClassName={styles["page-link"]}
                containerClassName={styles["pagination"]}
                activeClassName={styles["active"]}
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default PaginatedItems;


