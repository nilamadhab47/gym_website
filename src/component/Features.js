import React from 'react'
import {Link} from "react-router-dom"
import { Box, Stack, Typography } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./Features.css"

const Features = () => {
    AOS.init();
    return (
        <Stack sx={{ mt: "10px", padding: "40px" }} alignItems="center" justifyContent="center" id="services">
            <Typography fontSize="116px" fontWeight="400" display="block" fontFamily="Bebas Neue" className="gradient-text1">
                <span className="gradient-text">checkout Amazing features</span>
            </Typography>
            <Stack display="flex" flexDirection="row" mt="100px" mb="100px" gap="80px" data-aos="zoom-in-up" className="features">
                <Link to="/explore">
                <Box height="400px" width="310px" backgroundColor="#eee" className="small-box--1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <h1>Programs</h1>
                    <span >weight loss</span>
                    <span >Calisthenics</span>
                    <span >body-building</span>
                </Box>
                </Link>
                <Link to="/explore">
                <Box height="520px" width="350px" className="big-box" display="flex" flexDirection="column" pt="150px" pl="23px" fontSize="46px">
                    {/* <h3>Workout Videos</h3> */}
                    <span >Access to</span>
                    <span >1000+</span>
                    <span >Online Workout</span>
                </Box>
                </Link>
                <Box height="400px" width="310px" backgroundColor="#eee" className="small-box--2" display="flex" flexDirection="column" color="#000">
                    <h1>Healthy Fitness Meals</h1>
                    <span>Healthy, Light, & Delicious Recipes</span>
                </Box>
            </Stack>
        </Stack>
    )
}

export default Features