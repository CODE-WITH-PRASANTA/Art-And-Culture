import React from 'react'
import './About.css'
import Childrensection from '../../Components/Childrensection/Childrensection.jsx'
import Studentsection from '../../Components/Studentsection/Studentsection.jsx'
import Teachersection from '../../Components/Teachersection/Teachersection.jsx'
import Registersection from '../../Components/Registersection/Registersection.jsx'
import Kindergartensection from '../../Components/Kindergartensection/Kindergartensection.jsx'
import Clubsection from '../../Components/Clubsection/Clubsection.jsx'
import Coresection from '../../Components/Coresection/Coresection.jsx'
import Gallerysection from '../../Components/Gallerysection/Gallerysection.jsx'
import Parentsaysection from '../../Components/Parentsaysection/Parentsaysection.jsx'
import Instagramsection from '../../Components/Instagramsection/Instagramsection.jsx'
import AboutBreadCrum from '../../Components/AboutBreadCrum/AboutBreadCrum.jsx'

const About = () => {
  return (
    <div>
      <AboutBreadCrum />
      <Childrensection/>
      <Studentsection/>
      <Teachersection/>
      <Registersection/>
      <Kindergartensection/>
      <Clubsection/>
      <Coresection/>
      <Gallerysection/>
      <Parentsaysection/>
      <Instagramsection/>
    </div>  
  )
}

export default About
