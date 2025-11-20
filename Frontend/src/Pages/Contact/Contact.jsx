import React from 'react'
import './Contact.css'
import Contactcardsection from '../../Components/Contactcardsection/Contactcardsection'
import Contactformsection from '../../Components/Contactformsection/Contactformsection'
import Mapsection from '../../Components/Mapsection/Mapsection'

const Contact = () => {
  return (
    <div>
        <Contactcardsection/>
        <Contactformsection/>
        <Mapsection/>
    </div>
  )
}

export default Contact