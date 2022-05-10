import dropDownIcon from '../../assets/images/icons/dropdown-icons.svg';
import BookList from '../../components/bookList';
import FundingInfo from '../../components/funding';
import styles from './home.module.css';
import {productionBooksData, projectsBooksData, libraryBooksData} from "../../components/DummyData";


const Home = () => {


    return (
        <div className={styles['home-container']}>
            <div className={styles['top-area']}>
                <h1>Best CROWD FUNDING Platform for AudioBook</h1>
            </div>
            <BookList text={'Projects'} data={projectsBooksData} type='project'/>
            <FundingInfo/>
            <BookList text={'Samples Audio book'} data={libraryBooksData}/>
            <BookList text={'Productions'} data={productionBooksData} type='production'/>
        </div>
    )
}

export default Home