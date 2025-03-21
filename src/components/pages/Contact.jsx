import React from 'react'
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';
import imgContact from '../../assets/img/img_home8.jpg'
import './Contact.css'

export const Contact = () => {
  return (
    <>
     <Header />
     <main>
         <img className='img-fullscreenCt' src={imgContact} alt="Fondo" />
     </main>
     <Footer />
    </>
  )
}
