import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Experience from '../../components/experience/Experience'
import Portfolio from '../../components/portfolio/Portfolio'
import Contact from '../../components/contact/Contact'
import Studies from '../../components/studies/Studies'
import NavMenu from '../../components/nav/Nav'

const Home = () => {
  return (
    <>
    <BrowserRouter>
      <NavMenu />
      <Header />
      <About />
      <Experience />
      <Studies />
      <Portfolio />
      <Contact />
      <Footer />
    </BrowserRouter>

    </>
  )
}

export default Home;