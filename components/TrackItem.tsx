import { Card } from '@material-ui/core'
import React, { useEffect } from 'react'
import { ITrack } from '../types/track'
import styles from '../styles/TrackItem.module.scss'
interface TrackItemPrors {
    track: ITrack;
    active?: boolean;
}
const TrackItem: React.FC<TrackItemPrors> = ({track, active=false}) => {
    useEffect(() => {
        console.log(styles)
    }, [])
    return (
        <Card className={styles.track}>
            {track.name}
        </Card>
    )
}

export default TrackItem
