import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
import { Typography } from "@mui/material"
import crown from "../img/images/crown.svg"
import "./Pricing.css"
import { FaCrown } from 'react-icons/fa'

const Pricing = () => {
    // AOS.init();
    return (
        <section className="section-tours" id="plans" >
            <Typography fontSize="116px" fontWeight="400" display="block" fontFamily="Bebas Neue" textAlign="center" className="gradient-text1">
                <span className="gradient-text-2">choose your training plan</span>
            </Typography>
            <div className="row">
                <div className="col-1-of-3" style={{ marginLeft: "25px"}}>
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">BASIC</span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>Flexible workout planner</li>
                                    <li>Top-notch log tracker</li>
                                    <li>1400+ exercises library</li>
                                    <li>Body stats tracking tools</li>
                                    <li>Support interval training</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1 ">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">ads supported</p>
                                    <p className="card__price-value">Free</p>
                                </div>
                                <a href="#" className="btn btn--white">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front" style={{height: "51rem"}}>
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--2">Pro <FaCrown style={{fontSize:"35px"}}/></span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>All BASIC plan features</li>
                                    <li>No ads</li>
                                    <li>Advanced tracking features</li>
                                    <li>Compare records with friends</li>
                                    <li>Exercise tips from JEFIT experts</li>
                                    <li>Premium workout plans</li>
                                    <li>More...</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2 " style={{height: "51rem"}}>
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">monthly</p>
                                    <p className="card__price-value">$12.99</p>
                                </div>
                                <a href="#" className="btn btn--white">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front" style={{height: "55rem"}}>
                            <div className="card__picture card__picture--3">
                            &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">Elite <FaCrown style={{fontSize:"35px"}}/></span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                <li>All BASIC plan features</li>
                                    <li>No ads</li>
                                    <li>Advanced tracking features</li>
                                    <li>Compare records with friends</li>
                                    <li>Exercise tips from JEFIT experts</li>
                                    <li>Premium workout plans</li>
                                    <li>More...</li>
                                    <li>Save 55%</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3 " style={{height: "55rem"}}>
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Yearly</p>
                                    <p className="card__price-value">$69.96</p>
                                </div>
                                <a href="#" className="btn btn--white">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </section>
    )
}

export default Pricing