import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Typography } from "@mui/material"
import { FaCheckDouble } from 'react-icons/fa';
import photo1 from "../img/images/bg1.jpg"
import photo2 from "../img/images/photo2.jpg"
import photo3 from "../img/images/photo3.jpg"


// import DoneAllIcon from '@material-ui/icons/DoneAll';
import "./Reasons.css"

const Reasons = () => {
    return (
        <div className="section-reasons">

            <div className="reasons" >
                <div className="reasons__left">
                    <div className="reasons__left--text">
                        <Typography fontSize="72px" fontWeight="400" display="block" fontFamily="Bebas Neue" textAlign="center" className="gradient-text1">
                            <span className="gradient-text-2">What makes you sure <br/> to choose us ?</span>
                        </Typography>

                        <h3 className="reasons__left-texts"><FaCheckDouble className="check" color="blue" /> &nbsp;1200+ at-home workouts </h3>
                        <h3 className="reasons__left-texts"><FaCheckDouble color="blue" /> &nbsp;30+ goal based fitness programs</h3>
                        <h3 className="reasons__left-texts"><FaCheckDouble color="blue" /> &nbsp;Meditation sessions, health podcasts</h3>
                        <h3 className="reasons__left-texts"><FaCheckDouble color="blue" /> &nbsp;Support custom exercises</h3>

                    </div>

                </div>
                <div className="reasons__right">
                    <div className="composition">
                        <img src={photo1} alt="photo-1" className="composition__photo composition__photo--p1" />
                        <img src={photo2} alt="photo-2" className="composition__photo composition__photo--p2" />
                        <img src={photo3} alt="photo-3" className="composition__photo composition__photo--p3" />

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Reasons