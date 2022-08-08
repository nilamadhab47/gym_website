import React from 'react'
import {Box, Stack, Typography} from "@mui/material"
import Logo from "../img/images/Logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer" id="about">
      <div className="footer__logo-box">
        <img src={Logo} alt="logo" className="footer__logo"/>

      </div>
      <div className="footer__container">
        <div className="footer__container--item">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
            </ul>
          </div>
            
        </div>
        <div className="footer__container--item">
          <p className="footer__copyright">
            Built By &nbsp; <a href="http://twitter.com/NilamadhabSenap" className="footer__link"> Nilamadhab Senapati. &nbsp;</a>
            Modern and responsive gym website
          </p>
          <div className="footer__logo--link">
            <a href="https://github.com/nilamadhab47" className="footer__links"><i className="bi bi-github"></i></a>
            <a href="http://twitter.com/NilamadhabSenap" className="footer__links"><i className="bi bi-twitter"></i></a>
            <a href="https://www.instagram.com/mai_akela_marega/" className="footer__links"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/nilamadhab47" className="footer__links"><i className="bi bi-linkedin"></i></a>
            <a href="https://www.facebook.com/nilamadhab.senapati/" className="footer__links"><i className="bi bi-facebook"></i></a>
          </div>

            
          
        </div>
    </div>

    </footer>
  )
}

export default Footer