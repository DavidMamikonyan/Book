import React from "react";
import styles from './aboutUs.module.css';
import PageTitle from './../../components/Common/PageTitle';
import bookIcon from './../../assets/images/bookImg.png';

export default () => {
    return (
        <div className={styles['main-container']}>
            <div className={styles['top-area']}>
                <img src={bookIcon} alt='book image'/>

            </div>
            <PageTitle text='About Us'/>
            <p className={styles['about-us-text']}>The idea of Nashir.App came after witnessing firsthand the challenging facing Arabic literature in the Arab world and the huge disconnect between the Arabic literature industry and the customers based in North America and western Europe. We believe in the enlightening power of knowledge and want to create a tool where all of us can contribute to the advancement of the Arabic book publishing industry.
                Audiobook usage is at an all-time high and is nearing the level of printed and e-book consumption, especially with younger audiences.
                Arab audiobook industry is rapidly growing, but it remains constrained in its geography and genres. Non-fiction books that tackle serious topics are at the mercy of censorship. Nashir is able to rise above these challenges and allows us all to decide what we listen to.
                Nashir.App gives you the power to choose the books you want to elevate and helps us all share the task to bring it to light.
                The platform splits the income with the authors, creating a new revenue stream for them to help them continue. Traditional publishing has long ceased to play that role for the vast majority of authors in the Arab world.
                Our goal is to revolutionize Arab knowledge production and distribution, create a unique audiobook platform that escapes all the red tapes, and put forward a tool to enrich the Arabic audio library.</p>
        </div>
    )
}