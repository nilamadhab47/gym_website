import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material"
// import HeroBannerImage from "../img/images/bg11.png"
import ImageSlider from './ImageSlider'
import NumberCounter from "number-counter"
import Logo from "../img/images/Asset 1.png"
import "./HeroBanner.css"

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: "140px", xs: "70px" }, ml: { sm: "50px" } }} position="relative" p="20px">
            <Typography color="#eee" fontWeight="300" fontSize="36px" fontFamily="Bebas Neue" letterSpacing="1.5px" display="inline" border="4px solid" p="6px" className="inverted-4" sx={{fontSize : {xs : "2rem"}}}>
                Anmol Rohilla Fitness Club
            </Typography>
            <Typography fontWeight="400" sx={{ fontSize: { lg: "60px", xs: '40px' } }} mb="23px" mt="30px" fontFamily="Bebas Neue">
                <span className="stories__join--span">Hustle</span> For That <span className="stories__join--span">Muscle</span>
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4} fontFamily="'Poppins'">
            Choose from hundreds of workouts, healthy recipes and expert articles, <br/> for a whole body and mind approach to feeling great
            </Typography>
            <div className="figures">
                <div>
                    <span><NumberCounter start={1000} end={1300} delay="4" postFix="+"/></span>
                    <span>Exercise</span>
                </div>
                <div>
                    <span><NumberCounter end={30} delay="2" postFix="+"/></span>
                    <span>programs</span>
                </div>
                <div>
                    <span><NumberCounter  end={50} delay="2" postFix="+"/></span>
                    <span>expert Coaches</span>
                </div>
            </div>
            <Button variant="contained" color="error" href="/explore" sx={{backgroundColor:"#f39c12", padding: "10px"}} fontFamily="Poppins" className="btn1 btn1-primary">
                Explore Exercises
            </Button>
            <Typography
            fontWeight={400}
            color="#fff"
            sx={{opacity: 0.1, display: {lg : "inline-block", xs : 'none'}}}
            fontSize="220px"
            mt="-240px"
            fontFamily="Bebas Neue"
            className="big-letter"
            >
                Anmol Rohilla
            </Typography>

            <ImageSlider />
            <div className="color-box">
                

            </div>

        </Box>
    )
}

export default HeroBanner