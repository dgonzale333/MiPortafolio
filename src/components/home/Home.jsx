import React, { useState, useEffect } from 'react';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer.jsx';
import imgHome from '../../assets/img/img_home8.jpg';
import imgSection from '../../assets/img/img_home2.jpg';
import './Home.css';

export const Home = () => {
   
   
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Header  />

            <main>
                <img className='img-fullscreen' src={imgHome} alt="Fondo" />
                <p className='txt-main'>David Gonzalez</p>
                <p className='txt-main'>Desarrollador FullStack</p>
                <div className="bt-home">
                    <button className='bt-home1' onClick={() => scrollToSection('about')}>Mirar Más</button>
                    <button className='bt-home2' >Mis Proyectos</button>
                </div>
            </main>

            <section id="about">
                <img src={imgSection} alt="Sobre mí" />
                <div className="info-section1">
                    <h2>Sobre mí</h2>
                    <p>
                    Persona versátil y con habilidades para gestionar
                    múltiples tareas de manera eficiente.Me caracterizo
                    por mi dinamismo, proactividad y entusiasmo para
                    aprender y adaptarme a nuevos desfíos. Cuento con
                    conocimientos en programación de software y
                    herramientas digitales, con especial interés en el
                    desarrollo y la innovación tecnológica
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

