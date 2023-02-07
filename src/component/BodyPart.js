import React from 'react'
import { Link } from 'react-router-dom'
import {Stack, Typography } from "@mui/material"

import Icon from "../img/icons/exercise.png"
import Back from "../img/icons/ex1.png"
import Cardio from "../img/icons/cardio.png"
import Chest from "../img/icons/chest.png"
import LowerA from "../img/icons/muscles.png"
import Leg from "../img/icons/leg.png"
import Neck from "../img/icons/neck-pull.png"
import Shoulder from "../img/icons/lifting.png"
import UpperA from "../img/icons/muscle.png"
import UpperL from "../img/icons/casual-exercise.png"
import Waist from "../img/icons/waist.png"

//gym image
const gymImage = [
  {
    id: 1,
    icon: Icon,
  },
  {
    id: 2,
    icon: Back,
  },
  {
    id: 3,
    icon: Cardio,
  },
  {
    id: 4,
    icon: Chest,
  },
  {
    id: 5,
    icon: LowerA,
  },
  {
    id: 6,
    icon: Leg,
  },
  {
    id: 7,
    icon: Neck,
  },
  {
    id: 8,
    icon: Shoulder,
  },
  {
    id: 9,
    icon: UpperA,
  },
  {
    id: 10,
    icon: UpperL,
  },
  {
    id: 11,
    icon: Waist,
  },
  

]

const BodyPart = ({item, bodyPart, setBodyPart}) =>  (
    <Stack
    type="button"
    alignItems = "center"
    justifyContent = "center"
    className = "bodyPart-card"

    sx={{
       border : bodyPart === item ?  '4px solid #a1e533': "",
        backgroundColor: "#211f1f",
        borderRadius : "10px",
        width: '270px',
        height : "280px",
        cursor: 'pointer',
        gap: "47px",
        overflow : "visible",
      
    }}
    
    onClick = {() => {
      setBodyPart(item);
      window.scrollTo({top: 1800, left: 100, behavior:"smooth"})
    }}
    >
      
        <img src={Icon} alt="dumbbell" style={{width: '40px', height: '40px'}} />
        <Typography fontSize="24px" fontWeight={300} textTransform="capitalize" color="#fff" fontFamily="Bebas Neue">{item}</Typography>
    </Stack>
    
  )


export default BodyPart