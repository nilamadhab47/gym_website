import React from 'react'
import {Box, Stack, Typography} from "@mui/material"


const ExerciseVideos = ({videosDetails, name}) => {
  if(!videosDetails.length) return "loading...";
  return (
    <Box sx={{marginTop : {lg : "60px" , xs : "20px"}, p:"20px"}}>
      <Typography variant ="h3" mb="33px" fontFamily="Bebas Neue" fontWeight={400}>
        Watch <span className="stories__join--span" style={{fontWeight: "bold", textTransform: "uppercase"}}>{name}</span> Exercise Videos
      </Typography>
      
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" 
      sx={{gap : {lg : "200px" , xs : "0"}, flexDirection: { lg :"row"}}}
      >
        {videosDetails?.slice(0 ,3).map((item, index)=>(
          <a
          key={item.index}
          className = "exercise-video"
          href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} className="video-card"/>
            <Box>
              <Typography variant="h5" color="#fff" fontFamily="Bebas Neue">
                {item.video.title}
              </Typography>
              <Typography variant="h7" color="#fff" fontFamily="Poppins">
                {item.video.channelName}
              </Typography>
            </Box>

          </a>
        ))}


      </Stack>

      
    </Box>
  )
}

export default ExerciseVideos