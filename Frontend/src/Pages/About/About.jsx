import React from 'react'
import './About.css'
import Childrensection from '../../Components/Childrensection/Childrensection.jsx'
import Studentsection from '../../Components/Studentsection/Studentsection.jsx'
import Teachersection from '../../Components/Teachersection/Teachersection.jsx'
import Registersection from '../../Components/Registersection/Registersection.jsx'
import Kindergartensection from '../../Components/Kindergartensection/Kindergartensection.jsx'
import Clubsection from '../../Components/Clubsection/Clubsection.jsx'




import AboutBreadCrum from '../../Components/AboutBreadCrum/AboutBreadCrum.jsx'
import AboutReview from '../../Components/AboutReview/AboutReview.jsx'

const About = () => {
  return (
    <div>
      <AboutBreadCrum />
      <Childrensection/>
      <Studentsection/>
      <Teachersection/>
      <Registersection/>
      <Kindergartensection/>
      <AboutReview/>
      <Clubsection/>
      
      
      
    </div>  
  )
}

export default About
