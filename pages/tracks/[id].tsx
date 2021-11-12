import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react'
import MainLayout from '../../layouts/MainLayout';

const TrackPage = () => {
    const track = {_id:'1', name:'track_1', artist:'artist_1', text:'some text', listens:5, audio:'', picture:'https://cdnimg.rg.ru/pril/article/201/86/95/55p_gus-obtr_1000.jpg', comments:[{_id:'1', text:'some comment', username:'user_1'}] };
    const router = useRouter()
    return (
        <MainLayout>
            <Button 
                variant="outlined" 
                style={{fontSize:32}} 
                onClick={()=>{router.push("/tracks")}}>
                    To List
            </Button>
            <Grid container style={{margin:"20px 0"}}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{marginLeft:30}}>
                    <h1>Track name - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Listens - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Text</h1>
            <p>{track.text}</p>
            <Grid container>
                <TextField
                    label="Your name"
                    fullWidth
                />
                <TextField 
                    label="Comment"
                    fullWidth
                    multiline
                    rows={4}
                />
            </Grid>
            <div>
                {
                    track.comments.map((comment, index)=>
                        <div key={index}>
                            <div>{comment.username}</div>
                            <div>{comment.text}</div>
                        </div>    
                    )
                }
            </div>
        </MainLayout>
    )
}

export default TrackPage; 
