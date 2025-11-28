import React from 'react'
import './Contact.css'
import ContactBreadCrum from '../../Components/ContactBreadCrum/ContactBreadCrum'
import Contactcardsection from '../../Components/Contactcardsection/Contactcardsection'
import Contactformsection from '../../Components/Contactformsection/Contactformsection'
import Mapsection from '../../Components/Mapsection/Mapsection'

const Contact = () => {
  return (
    <div>
        <ContactBreadCrum/>      
        <Contactcardsection/>
        <Contactformsection/>
        <Mapsection/>
    </div>
  )
}

export default Contact