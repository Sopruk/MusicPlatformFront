import { Box, Button, Card, Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'

function index() {
    const router = useRouter();
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
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default index
