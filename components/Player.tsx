import { Grid, IconButton } from '@material-ui/core'
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons'
import { match } from 'assert';
import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import style from '../styles/Player.module.scss'
import TrackProgres from './TrackProgres';

const track = {_id:'2', name:'track_2', artist:'artist_1', text:'some text', listens:5, audio:'http://localhost:5000/audio/5a604829-d37c-4b3a-af58-e93e5543bec6.mp3', picture:'https://cdnimg.rg.ru/pril/article/201/86/95/55p_gus-obtr_1000.jpg', comments:[{_id:'1', text:'some comment', username:'user_1'}] };
let audio;
const Player = () => {
    const { active, currentTime, duration, pause, volume } = useTypedSelector(state=>state.player)
    const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack } = useActions()
    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
        }
    }, [])
    const setAudio = () => {
        if(active){
            audio.src = track.audio
            audio.volume = volume/100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
             setCurrentTime(Math.ceil(audio.currentTime))
         }
        }
    }
    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }
    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value)/100
        setVolume(Number(e.target.value))
    }
    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }
    return (
        <div className={style.player}>
            <IconButton onClick={play}>
                {pause?<PlayArrow/>:<Pause/>}
            </IconButton>
            <Grid container direction="column" style={{width:200, margin:"0 20px"}}>
                <div>{track.name}</div>
                <div style={{fontSize:12, color:"grey"}}>{track.artist}</div>
            </Grid>
            <TrackProgres left={currentTime} right={duration} onChange={changeCurrentTime}/>
            <VolumeUp style={{marginLeft:"auto"}}/>
            <TrackProgres left={volume} right={100} onChange={changeVolume}/>
        </div>
    )
}

export default Player