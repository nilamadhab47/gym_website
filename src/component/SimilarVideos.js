import React from 'react'
import {Box, Stack, Typography} from "@mui/material"
import HorizontalScrollBar from "./HorizontalScrollBar"
import Loader from './Loader'

const SimilarVideos = ({targetExercise, equipmentExercise}) => {
  return (
    <Box sx={{marginTop :{lg : "50px", xs : "0"}}}>
      <Typography variant="h3" mb={5} fontFamily="Bebas Neue" ml="30px">
        Exercise that target <span className="stories__join--span">same muscle</span> group
      </Typography>
      <Stack direction="row" sx={{p : "2", position:"relative"}} mb={5}>
        {targetExercise.length ? <HorizontalScrollBar data={targetExercise}/> : <Loader />}

      </Stack>
      <Typography variant="h3" mb={5} fontFamily="Bebas Neue" ml="30px">
        Exercise that target <span className="stories__join--span">same Equipment</span> 
      </Typography>
      <Stack direction="row" sx={{p : "2", position:"relative"}} style={{marginBottom:"24px" }}>
        {equipmentExercise.length ? <HorizontalScrollBar data={equipmentExercise}/> : <Loader />}

      </Stack>
    </Box>
  )
}

export default SimilarVideos