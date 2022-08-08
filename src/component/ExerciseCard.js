import React from 'react'
import { Link } from "react-router-dom"
import { Button, Stack, Typography } from "@mui/material"




const ExerciseCard = ({exercise}) => {
    
    return (
        <div>
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">

                <Button sx={{ ml: "21px", borderRadius: "20px", textTransform: "capitalize", backgroundColor: "#ffa9a9", fontSize: "14px", color: "#fff", fontFamily:"Poppins"}}>
                    {exercise.bodyPart}

                </Button>
                <Button sx={{ ml: "21px", borderRadius: "20px", textTransform: "capitalize", backgroundColor: "#fcc757", fontSize: "14px", color: "#fff", fontFamily:"Poppins"}}>
                    {exercise.target}

                </Button>
            </Stack>
            <Typography ml="21px" color="#fff" fontSize="20px" pb="10px" textTransform="capitalize" fontWeight="bold" mt="11px" fontFamily="Poppins">
                {exercise.name}
            </Typography>
        </Link>
        </div>

    )
}

export default ExerciseCard