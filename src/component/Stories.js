import React, {useRef} from 'react'
import { Box, Typography } from "@mui/material"
import {useNavigate} from 'react-router-dom'
import emailjs from '@emailjs/browser';
import reviews from "../data/ReviewData"
import video from "../img/images/video.mp4"
import video1 from "../img/images/video.webm"
import "./Stories.css"


const Stories = () => {
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        navigate('/');
    
        emailjs.sendForm('service_0jljbp6', 'template_334fp2i', form.current, 've_-wviyzkgygPg26')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return (
        <section className="stories" id="community">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted="true" loop>
                    <source src={video} type="video/mp4" />
                    <source src={video1} type="video/webm" />
                    the video is not supported

                </video>
            </div>
            <div className="header-stories">
                <Typography fontSize="116px" fontWeight="400" display="block" fontFamily="Bebas Neue" textAlign="center" className="gradient-text1">
                    <span className="gradient-text-2">Join Our Community</span>
                </Typography>
            </div>
            <div className="stories__container">

                {reviews.map((review) => (
                    <>

                    <div className="stories__container--item">
                        <div className="container--text">
                            <p className="stories__container--review">{review.review}</p>
                            <p className="stories__container--name">{review.name}</p>
                            <p className="stories__container--status">{review.status}</p>

                        <img src={review.image} alt="photo1"className="stories__container--image" />
                        </div>

                    </div>
                    </>

                ))}
            </div>
            <div className="stories__join">
                <h2>MOVE <span className="stories__join--span">BETTER.</span> FEEL <span className="stories__join--span" >BETTER.</span> LIVE <span className="stories__join--span">BETTER.</span></h2>
                <p>Join now with 10% off and stay in the loop on news, deals, new workout alerts, and more.</p>

                <form ref={form} className="stories__join--email" onSubmit={sendEmail}>
                    <input type="email" name="email" id="email_id" placeholder="Enter your email"/>
                    <button className="btn2 btn-join" type="submit"> Join Now</button>
                </form>
            </div>


        </section>
    )
}

export default Stories