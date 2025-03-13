import React from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/footer'
import imgProyects from '../../assets/img/img_home8.jpg'
import './Proyects.css'

export const Proyects = () => {
  return (
   <>
   <Header />
  <img className='img-fullscreenPr' src= {imgProyects} alt="" />
  <main>
    
  </main>
  <Footer />
   </>
  )
}
