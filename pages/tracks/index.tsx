import { Box, Button, Card, Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import TrackList from '../../components/TrackList';
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track';

function Index() {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id:'1', name:'track_1', artist:'artist_1', text:'some text', listens:5, audio:'', picture:'https://cdnimg.rg.ru/pril/article/201/86/95/55p_gus-obtr_1000.jpg', comments:[{_id:'1', text:'some comment', username:'user_1'}] },
        {_id:'2', name:'track_2', artist:'artist_1', text:'some text', listens:5, audio:'', picture:'https://cdnimg.rg.ru/pril/article/201/86/95/55p_gus-obtr_1000.jpg', comments:[{_id:'1', text:'some comment', username:'user_1'}] }
    ] 
    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{width:"900px"}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>Tracks list</h1>
                            <Button onClick={()=>router.push("/tracks/create")}>Download</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index
