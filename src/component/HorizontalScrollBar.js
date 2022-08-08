import React, {useContext} from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box, Typography } from "@mui/material"
import ExerciseCard from './ExerciseCard'
import BodyPart from './BodyPart'

import RightArrowIcon from '../img/icons/right-arrow.png';
import LeftArrowIcon from '../img/icons/left-arrow.png';
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


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

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
  
  

const HorizontalScrollBar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {
            data.map((item) =>( 
            <Box
            key={item.id || item} 
            itemId={item.id || item} 
            title={item.id || item} 
            m = "30px 40px"
            
            >
              {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart = {setBodyPart}/> : <ExerciseCard exercise={item}/>}

            </Box>))
        }
    </ScrollMenu>
  )
}

export default HorizontalScrollBar