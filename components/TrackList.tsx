import { Box, Grid, Paper } from '@material-ui/core'
import React, { useEffect } from 'react'
import { ITrack } from '../types/track'
import TrackItem from './TrackItem'

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    useEffect(() => {
        console.log(tracks)
    })
    return (
        <Grid container direction='column'>
            <Box p={2}>
                {
                    tracks.map(track=>
                        <TrackItem key={track._id} track={track} />
                    )
                }
            </Box>
        </Grid>
    )
}

export default TrackList
