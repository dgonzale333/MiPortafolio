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
                    <button className='bt-home2'>Mis Proyectos</button>
                </div>
            </main>

            <section id="about">
                <img src={imgSection} alt="Sobre mí" />
                <div className="info-section1">
                    <h2>Sobre mí</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Fuga repellendus autem quas recusandae labore molestias 
                        cum corporis aspernatur. Veritatis hic natus, qui vitae 
                        ullam necessitatibus rem ab laudantium nulla.
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

