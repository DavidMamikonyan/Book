import React, {useEffect} from 'react'
import styles from './singleBook.module.css'
import {useLocation, Link, useNavigate} from 'react-router-dom';
import SB_Library from './SB_Library';
import SB_Production from './SB_Production';
import SB_Projects from './SB_Projects';
import PlayOrPauseAudio from '../playOrPauseAudio/index';
import {useTranslation} from "react-i18next";

const SingleBookComponent = (props) => {

    let {
        id,
        name,
        description,
        author,
        content,
        status,
        narrator,
        genre,
        publicYear,
        goal,
        donated,
        deadline,
        imageext,
        type,
        playAudio,
    } = props

    const navigate = useNavigate();
    const {t, i18n} = useTranslation();

    const bookPageOpenHandler = () => {
        if (type !== 'production' && type) {
            navigate('/single-book-page', {
                state: {
                    selectedBook: props
                }
            })
        }
    };


    return (
        <div className={styles['single-book']} dir={i18n.dir()}>
            <div className={styles['img-container']} onClick={bookPageOpenHandler}>
                <img src={imageext} alt="book"/>
            </div>
            <div className={styles['hr']}/>
            {author &&
            <p className={styles['author']}>{t('singleBook.author')}
                <span className={styles['author-name']}>{author}</span>
            </p>}
            <span className={styles['book-name']}>{name}</span>
            <p className={styles['description']}>{description ? description.slice(0, 85) : content}</p>
            {type === 'project' && <SB_Projects item={{goal, donated, deadline, name}}/>}
            {type === 'production' && <SB_Production item={{status, deadline,}}/>}
            {type === 'library' && <SB_Library item={{narrator, genre, publicYear,}}/>}
            {playAudio && !type && <PlayOrPauseAudio playAudio={playAudio}/>}
        </div>
    )
}

export default SingleBookComponent


// const [arrgoals, setArrGoals] = useState([])


// const makeArray = (obj) => Object.entries(obj)
// const location = useLocation()

// useEffect(() => {
//     if (goalDonateTime) {
//         setArrGoals(makeArray(goalDonateTime))
//     }
// }, [arrgoals, goalDonateTime])


//
// console.log(arrgoals,'arrgoals');
// console.log(goalDonateTime, 'goalDonateTime');


{/*{*/
}
{/*    !!arrgoals.length && (*/
}
{/*        <div className="goals">*/
}
{/*            {*/
}
{/*                arrgoals.map((item, i) => {*/
}
{/*                    const [text, value] = item*/
}
{/*                    return <div key={i} className='singleGoal'>*/
}
{/*                        <h4 className={text === 'The goal' ? 'goal-value' : ''}>${value}</h4>*/
}
{/*                        <p>{text}</p>*/
}
{/*                    </div>*/
}
{/*                })*/
}
{/*            }*/
}
{/*        </div>)*/
}
{/*}*/
}
{/*{percents && (<div className="range">*/
}
{/*    <p className='percents'>{percents}%</p>*/
}
{/*    <div className='range-line' style={{*/
}
{/*        background: `linear-gradient(90deg , rgba(0, 165, 145, 1) ${percents}%, rgba(176,195,193,1) ${100 - percents}%)`*/
}
{/*    }}/>*/
}
{/*</div>)*/
}
{/*}*/
}
{/*{authorName && location.pathname === '/' && <PlayOrPauseAudio playAudio={playAudio}/> }*/
}
{/*{authorName && location.pathname === '/library' ? (*/
}
{/*    <div className='status-part'>*/
}
{/*        <p>Status : <b>{status}</b></p>*/
}
{/*        <p>Narrator: <b>{narrator}</b></p>*/
}
{/*        <p>Genre : <b>{genre}</b></p>*/
}
{/*    </div>*/
}
{/*) : ''}*/
}