import { IconButton } from '@material-ui/core'
import { Pause, PlayArrow } from '@material-ui/icons'
import React from 'react'
import style from '../styles/Player.module.scss'
const Player = () => {
    const active = false;
    return (
        <div className={style.player}>
            <IconButton>
                {!active?<PlayArrow/>:<Pause/>}
            </IconButton>
        </div>
    )
}

export default Player