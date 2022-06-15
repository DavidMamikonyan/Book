import BookList from '../../components/bookList';
import FundingInfo from '../../components/funding';
import styles from './home.module.css';
import {productionBooksData, projectsBooksData, libraryBooksData} from "../../components/DummyData";
import {useTranslation} from "react-i18next";



const Home = () => {
    const {t} = useTranslation();

    return (
        <div className={styles['home-container']}>
            <div className={styles['top-area']}>
                <h1>{t('homePage.title')}</h1>
            </div>
            <BookList data={projectsBooksData} type='project'/>
            <FundingInfo/>
            <BookList data={libraryBooksData} type='successfulProject'/>
            <BookList data={productionBooksData} type='production'/>
        </div>
    )
}

export default Home