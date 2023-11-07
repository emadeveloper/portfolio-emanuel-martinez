import React from 'react'
import './Nav.css'
import { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {PiCertificateFill} from 'react-icons/pi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import {AiFillFilePpt} from 'react-icons/ai'


const NavMenu = () => {
  const [active, setActive] = useState('#header')
  
  return (
    <nav>
        <a href="#header" onClick={()=> setActive('#header')} className={active === '#header' ? 'active' : ''}><AiOutlineHome/>Home</a>
        <a href="#about" onClick={()=> setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser/>About</a>
        <a href="#experience" onClick={()=> setActive('#experience')} className={active === '#experience' ? 'active' : ''}><BiBook/>Experience</a>
        <a href="#studies" onClick={()=> setActive('#studies')} className={active === '#studies' ? 'active' : ''}><PiCertificateFill/>Studies</a>
        <a href="#portfolio" onClick={()=> setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><AiFillFilePpt/>Portfolio</a>
        <a href="#contact" onClick={()=> setActive('#contact')} className={active === '#contact' ? 'active' : ''}><BiMessageSquareDetail/>Contact</a>
    </nav>
  )
}

export default NavMenu;