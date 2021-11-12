import { Container, Stepper } from '@material-ui/core'
import React from 'react'

interface StepWrapperProps{
    activeStep: number
}
const steps = ["Treck informations", ""]
const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>{children}</Stepper>
        </Container>
    )
}

export default StepWrapper
