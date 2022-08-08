import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Stack } from '@mui/material';
import Logo from "../img/images/Asset 1.png"
import "./Navbar.css"
import { FaCross, FaHamburger } from 'react-icons/fa';


const Navbar = () => {
  return (
    <Stack
    direction="row"
    justifyContent="space-around"
    sx={{gap : {sm: "122px", xs: "40px"}, mt:{sm: "32px", xs: "20px"}, justifyContent: "none" }} px="20px"

    >
      <Link to='/'>
        <img src={Logo} alt="logo" style={{
          width: "123px",
          height: "92px",
          margin: "-35px 0px",
          display: "inline-block",
      
      }}/>
      </Link>
      <Stack
      direction="row"
      gap="40px" 
      fontSize ="24px"
      alignItems="flex-end"
      >
      
        <Link to='/' style={{color: "#fff",}} className="navbar-link">Home</Link>
        <Link to='/explore' style={{color: "#fff",  }} className="navbar-link">EXPLORE</Link>
        <a href="#services" style={{textDecoration: "none", color: "#fff"}} className="navbar-link">services</a>
        <a href='#plans' style={{textDecoration: "none", color: "#fff"}} className="navbar-link">Plans</a>
        <a href='#community' style={{textDecoration: "none", color: "#fff"}} className="navbar-link">community</a>
        <a href='#email_id' style={{textDecoration: "none", color: "#000", backgroundColor:"#f39c12" , border: "2px solid #000" }} className="navbar-link">JOIN NOW</a>
        <a href="#exercise" style={{textDecoration: "none", color: "#fff"}}></a>
      </Stack>
    </Stack>
  )
}

export default Navbar