import React, {useState, useEffect} from 'react'
import {Box, Button, Stack, TextField, Typography} from "@mui/material"
import {exerciseOptions, fetchData} from "../utils/FetchData"
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercise = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState ([])



  useEffect(() => {
    const fetchExerciseList = async () => {
      const bodyPartList = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(["all", ...bodyPartList])


    };

    fetchExerciseList();
  }, [])

  const handleSearch = async() => {
    if(search){
      const exerciseData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises',
      exerciseOptions);
      console.log(exerciseData)

      const searchExercise = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('')
      setExercises(searchExercise)
      
    }
  
  }



  return (
    <Stack alignItems="center" mt="10px" justifyContent="center" p="20px" id="exercise" >
      <Typography fontWeight={400} sx={{fontSize :{lg: "44px", sm: "33px"}}} mb="50px" textAlign="center" fontFamily="Poppins" mt="50px">
        Awesome Exercise for <br/>
        Calisthenics and Body Weight
      </Typography>
      <Box position="relative" mb= "72px" id="exercise">
        <TextField
        sx={{
          input: {
            "&::placeholder": {
              color: "gray"
            },
            fontWeight: "700",
            border:"none",
            // borderRadius: "4px"
          },
          width: {lg: "1170px", xs:"350px"},
          backgroundColor: "#fff",
          borderRadius: "6px"
        }}
        height="76px"
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercise"
        type="text"
        />
        <Button className="search-btn"
        sx={{
          backgroundColor:"#a1e533",
          color: "#000",
          textTransform: "none",
          width: {lg : "175px", sm:"80px"},
          fontSize: {lg : "20px", sm:"14px"},
          height:"56px",
          position: "absolute",
          right : 0,
        }}
        onClick={handleSearch}
        >
          Search
        </Button>

      </Box>
      <Box sx={{ position: 'relative', width: '100%',p: '20px' }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart = {setBodyPart} isBodyParts />

      </Box>
    </Stack>
  )
}

export default SearchExercise