import React from 'react'
import { Box, Typography, Stack, Button } from "@mui/material"
import BodyPartImage from "../img/icons/body-part.png"
import equipmentImage from "../img/icons/equipment.png"
import targetImage from "../img/icons/target.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Details = ({ exerciseDetails }) => {
 

  const { bodyPart, gifUrl, name, equipment, target } = exerciseDetails

  const extraDetails = [
    {
      id : 1,
      icon: BodyPartImage,
      name: bodyPart
    },

    {
      id : 2,
      icon: equipmentImage,
      name: equipment
    },

    {
      id : 3,
      icon: targetImage,
      name: target
    },


  ]

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: "row" }, alignItems: "center", p: "20px" , mt:"14px"}}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" fontFamily="Bebas Neue">
          {name}
        </Typography>
        <Typography variant="h6" fontFamily="Poppins">
          Calisthenics enhance and develop muscular and aerobic endurance. {name} {" "}
          is one of the best exercises to target your {target}. {name} helps in strength, endurance, flexibility and balance.

        </Typography>
        {extraDetails.map((item) => (
          <Stack key={item.id} gap="24px" direction="row" alignItems="center">
            <Button sx={{backgroundColor: "#fff2db" , borderRadius: "50%", width: "80px", height: "80px"}}>
              <img src={item.icon} alt="bodyPart" style={{width : "50px" ,  height : "50px"}} />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>

  )
}

export default Details