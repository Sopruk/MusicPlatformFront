import { Button, Grid } from '@material-ui/core'
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
            <h1>Loading tracks- {activeStep}</h1>
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button variant="outlined" disabled={activeStep==0} onClick={back}>Prev</Button>
                <Button variant="outlined" onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    )
}

export default Create
