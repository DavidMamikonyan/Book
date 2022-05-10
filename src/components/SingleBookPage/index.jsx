import React from 'react'
import styles from './singleBookPage.module.css';
import {useLocation} from "react-router-dom";
import Pledged from './PledgedUsers';
import ListenRead from './ListenRead';
import PledgeInfo from './PledgeInfo';


export default () => {

    const location = useLocation();
    const book = location.state.selectedBook;

    return (
        <div className={styles['main-container']}>
            <div className={styles['top-area']}>
                <div className={styles['container']}>
                    <div className={styles['page-dir']}>
                        <span>{book.type} /</span>
                        <span>{book.name}</span>
                    </div>
                    <section className={styles['book-info-section']}>
                        <img src={book.imageext} alt='book' className={styles['book-img']}/>
                        <div className={styles['book-info-middle-area']}>
                            <div>
                                <span className={styles['book-name']}>{book.name}</span>
                                <div className={styles['author-container']}>
                                    <span>Author</span>
                                    <span>{book.author}</span>
                                </div>
                            </div>
                            <p className={styles['description']}>{book.description}</p>
                            <div className={styles['info-details']}>
                                {book.narrator && <div>
                                    <span>Narrator</span>
                                    <span>{book.narrator}</span>
                                </div>}
                                {book.genre && <div>
                                    <span>Genre</span>
                                    <span>{book.genre}</span>
                                </div>}
                                {book.publicYear && <div>
                                    <span>Year of publication</span>
                                    <span>{book.publicYear}</span>
                                </div>}
                            </div>
                        </div>
                        <div className={styles['book-info-right-area']}>
                            {book.type === 'library' && <ListenRead/>}
                            {book.type === 'project' && <PledgeInfo
                                goal={book.goal}
                                donated={book.donated}
                                deadline={book.deadline}/>}
                        </div>
                    </section>
                </div>
            </div>
            <div className={styles['bottom-area']}>
                <div className={styles['container']}>
                    <section className={styles['pledge-book-section']}>
                        <div>
                            <Pledged data={book.pledgedData}/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

// const SingleBookPage = () => {
//     const {id} = useParams()
//     console.log(id);
//     const {books, audioBook} = GlobalContext()
//     let singleName = '',
//         singleSrc = '',
//         singleAuthorName = '',
//         singleDescription = ''
//
//     const findedItem = books.find(item => item.id === Number(320))
//     const findedItemFromAudioBook = audioBook.find(item => item.id === Number(id))
//
//     if (findedItem || findedItemFromAudioBook) {
//         let {src, authorName, description, content,name: singleName } = findedItem || findedItemFromAudioBook
//         // singleName = name
//         singleSrc = src
//         singleAuthorName = authorName
//         singleDescription = description || content
//     }
//
//     console.log(singleName);
//     console.log(singleSrc);
//
//     return (
//         <div className='single-book-container'>
//             <div className='single-book-image'>
//                 <img src={singleSrc}/>
//             </div>
//             <div className="single-book-description">
//                 <h3>{singleName}</h3>
//                 <p className='single-page-author'>Autor <span
//                     className='single-page-author-name'>{singleAuthorName}</span></p>
//                 <p>{singleDescription}</p>
//             </div>
//             <div className="single-book-download">
//                 <button className='btn single-book-btn'><span>Download</span><img src={downloadIcon}/></button>
//                 <button className='btn single-book-btn'><span>Download</span><img src={downloadIcon}/></button>
//             </div>
//         </div>
//     )
// }
//
// export default SingleBookPage
