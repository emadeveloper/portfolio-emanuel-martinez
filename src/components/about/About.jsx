import React from 'react'
import './About.css'
import ME from '../../assets/me_about.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know more</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>On Personal Proyects</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Self-taught</h5>
              <small>Always Keep Learning</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Working</h5>
              <small>On Improving Myself</small>
            </article>
          </div>

          <p>
            i'm passionate about technology especially programming and web development, i like to learn new things every day whether is with courses reading or practicing on proyects and i'm always looking for new challenges.
          </p>
          <div className="about__button">
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About