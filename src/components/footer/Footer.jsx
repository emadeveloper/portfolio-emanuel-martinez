import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">EMANUEL MARTINEZ</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#studies">Studies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/emanueldavidmartinez/" target='blank'><FaFacebookF /></a>
        <a href="https://www.instagram.com/emanuel_martinez_1992/" target='blank'><BsInstagram /></a>
        <a href="https://linkedin.com/in/emanuel-david-martinez" target='blank'><BsLinkedin /></a>
        <a href="https://github.com/emadeveloper" target='blank'><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Emanuel Martinez. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;