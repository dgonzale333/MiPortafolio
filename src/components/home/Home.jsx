import React from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/footer'
import imgHome from '../../assets/img/img_home8.jpg'
import './Home.css'

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <img className='img-fullscreen' src={imgHome} alt="" />
                <p>David Gonzalez</p>
                <p>Desarrollador FullStack</p>
                <div className="bt-home">
                    <button className='bt-home1'>Mirar Más</button>
                    <button className='bt-home2'>Mis Proyectos</button>
                 </div>
            </main>
            <Footer />
            
        </>
    )
}
