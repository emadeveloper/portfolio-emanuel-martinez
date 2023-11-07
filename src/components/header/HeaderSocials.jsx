import React from 'react'
import "./header.css"
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/emanuel-david-martinez" target='blank'><BsLinkedin /></a>
        <a href="https://www.instagram.com/emanuel_martinez_1992/" target='blank'><BsInstagram /></a>
        <a href="https://github.com/emadeveloper" target='blank'><FaGithub /></a>
        <a href="https://www.facebook.com/emanueldavidmartinez/" target='blank'><FaFacebookSquare /></a>
    </div>
  )
}

export default HeaderSocials;