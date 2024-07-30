import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'
 
const TriangleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})
const TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:90,
    position:"absolute"
})
const Achivement = () => {
  return (
    <Card sx={{position:"relative"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>Anshu Jain</Typography>
            <Typography variant='body2'>Congratulations 🥳</Typography>
            <Typography variant='h5' sx={{my:3.1}}>500k</Typography>

            <Button size='small' variant='contained'>View Sales</Button>
        <TriangleImg src=''></TriangleImg>
        <TrophyImg src='https://t4.ftcdn.net/jpg/05/81/56/09/360_F_581560981_oQyGA3Yeu4SYpg9Dod7vmCHv6yMybKxk.jpg'></TrophyImg>
        </CardContent>

    </Card>
  )
}

export default Achivement
