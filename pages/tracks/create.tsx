import { Button, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import StepWrapper from '../../components/StepWrapper'
import MainLayout from '../../layouts/MainLayout'

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
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
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button variant="outlined" disabled={activeStep==0} onClick={back}>Prev</Button>
                <Button variant="outlined" onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    )
}

export default Create
