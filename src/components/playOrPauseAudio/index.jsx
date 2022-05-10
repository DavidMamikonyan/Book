import React, {useState} from 'react';
import audioVector from '../../assets/images/icons/audio-vector.svg';
import './style.playOrPauseAudio.css'

const audio = new Audio()
const PlayOrPauseAudio = ({playAudio}) => {
    const [play, setPlay] = useState(false)
    const playAudioPause = () => setPlay(pre => !pre)

    audio.src = playAudio
    play ? audio.play() : audio.pause()

    return (
        <button onClick={playAudioPause} className='play-btn'>
            <img src={audioVector}/>
            <span>Play Audio</span>
        </button>
    )
}

export default PlayOrPauseAudio