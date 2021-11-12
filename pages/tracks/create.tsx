import { Button, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import FileUpload from '../../components/FileUpload'
import StepWrapper from '../../components/StepWrapper'
import MainLayout from '../../layouts/MainLayout'

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const back = () =>{
        setActiveStep(prev => prev - 1)
    }
    const next = () =>{
        const maxStep = 2;
        if(activeStep<=maxStep)
        setActiveStep( prev => prev + 1)
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
            {
                activeStep == 0 &&
                <Grid container direction="column" style={{padding:20}}>
                    <TextField 
                        style={{marginTop:10}}
                        label={"Track name"}
                        variant="outlined"
                    />
                    <TextField 
                        style={{marginTop:10}}
                        label={"Artist name"}
                        variant="outlined"
                    />
                    <TextField
                        style={{marginTop:10}} 
                        label={"Track name"}
                        variant="outlined"
                        multiline
                        rows={3}
                    />
                </Grid>
            }
            {
                activeStep == 1 && 
                <FileUpload setFile={setPicture} accept="image/*" >
                    <Button variant="outlined">Upload Image</Button>
                </FileUpload>
            }
            {
                activeStep == 2 && 
                <FileUpload setFile={setAudio} accept="audio/*" >
                    <Button variant="outlined">Upload Audio</Button>
                </FileUpload>
            }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button variant="outlined" disabled={activeStep==0} onClick={back}>Prev</Button>
                <Button variant="outlined" onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    )
}

export default Create
