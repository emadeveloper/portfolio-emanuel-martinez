import React from 'react'
import './Studies.css'
import {GrReactjs} from 'react-icons/gr'


const Studies = () => {
  return (
    <section id='studies'>
          <h5>Technologies</h5>
          <h2>Certificates obtained</h2>
          <div className="container studies__container">
            <article  className='study'>
              <div className="study__head">
                <h3>HTML & CSS</h3>
              </div>
              <div className="study__list">
                  <p>Successfully completed an extensive 38-hour HTML and CSS course, which concluded on April 27, 2022. During the course, I delved into the fundamentals of web development, honing my skills in HTML and CSS to create visually appealing and responsive web pages. I gained a deep understanding of web design principles and the ability to craft well-structured, user-friendly websites. This learning experience has equipped me with valuable skills that I'm excited to apply in my future proyects.</p>
                  <a href="" className='btn btn-primary'>Certificate</a>
              </div>
            </article>
            {/* END OF HTML & CSS COURSE ARTICLE */}
            <article className='study'>
              <div className="study__head">
                <h3>Javascript</h3>
              </div>

              <div className="study__list">
                  <p>Finished an intensive 34-hour JavaScript course, concluding on July 11, 2022. Throughout the duration of the course, I dived deep into the world of JavaScript, understanding its essential concepts. This experience allowed me to develop dynamic web solutions, expanding my skills as a web developer. I was proficient in using JavaScript to enhance user experiences and create robust web applications. I'm eager to leverage these newfound skills to build innovative web projects in the future.</p>
                  <a href="" className='btn btn-primary'>Certificate</a>
              </div>
            </article>
            {/* END OF JAVASCRIPT COURSE ARTICLE */}
            <article className='study'>
              <div className="study__head">
              <h3>React</h3>
              </div>

              <div className="study__list">
                  <p>Completed a 30-hour React course, successfully concluding on June 28, 2023. This course provided me with a solid foundation in React. Through engaging lessons and hands-on projects, I learned how to efficiently manage state, handle user interactions, and design visually appealing interfaces using React. With these newly acquired skills, I am excited to embark on projects that leverage the full potential of React and deliver exceptional user experiences.</p>
                  <a href="https://www.coderhouse.com/certificados/64c0606aaee676000247dc17?lang=es" className='btn btn-primary'>Certificate</a>
              </div>
            </article>
          </div>
    </section>
  )
}

export default Studies;