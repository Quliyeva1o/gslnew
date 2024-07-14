import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Courses from '../../components/Courses'
import News from '../../components/News'
import Prouds from '../../components/Prouds'
import Contact from '../../components/Contanct'
import Exam from '../../components/Exam'
import Slider from '../../components/Slider'
import CountSection from '../../components/CountSection'
import Abroad from '../../components/Abroad'

const Home = () => {
  return (
    <>
      <Slider />
      {/* <Hero /> */}
      {/* <About /> */}
      <Courses />
      <CountSection/>
      <News />
      <Abroad/>
      <Exam id='exam-section' />
      <Prouds />
      <Contact id='contact-section' />
    </>
  )
}

export default Home
