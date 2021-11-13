import { Grid, IconButton } from '@material-ui/core'
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons'
import React from 'react'
import style from '../styles/Player.module.scss'
import TrackProgres from './TrackProgres';

const track = {_id:'2', name:'track_2', artist:'artist_1', text:'some text', listens:5, audio:'', picture:'https://cdnimg.rg.ru/pril/article/201/86/95/55p_gus-obtr_1000.jpg', comments:[{_id:'1', text:'some comment', username:'user_1'}] };

const Player = () => {
    const active = false;
    return (
        <div className={style.player}>
            <IconButton>
                {!active?<PlayArrow/>:<Pause/>}
            </IconButton>
            <Grid container direction="column" style={{width:200, margin:"0 20px"}}>
                <div>{track.name}</div>
                <div style={{fontSize:12, color:"grey"}}>{track.artist}</div>
            </Grid>
            <TrackProgres left={0} right={100} onChange={()=>({})}/>
            <VolumeUp style={{marginLeft:"auto"}}/>
            <TrackProgres left={0} right={100} onChange={()=>({})}/>
        </div>
    )
}

export default Player