import React from 'react';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';
import { motion } from 'framer-motion';
import imgProyects from '../../assets/img/img_home8.jpg';
import imgHoddie from '../../assets/img/hoddieHub.png';
import imgDictionary from '../../assets/img/dictionary.png';
import imgReproducer from '../../assets/img/reproductor.png';
import imgAirbn from '../../assets/img/airbn.png';
import './Proyects.css';

const projects = [
  {
    id: 1,
    title: 'HoodieHub',
    description: '',
    image: imgHoddie, 
    link: 'https://hoddie-hub.vercel.app/'
  },
  {
    id: 2,
    title: 'Diccionario',
    description: '',
    image: imgDictionary,
    link: 'https://dictionary-nu-rust.vercel.app/'
  },
  {
    id: 3,
    title: 'Reproductor',
    description: '',
    image: imgReproducer,
    link: 'https://reproductor-smoky.vercel.app/'
  },
  {
    id: 4,
    title: 'Agencia de Viajes',
    description: '',
    image: imgAirbn,
    link: 'https://trabajo-zeta.vercel.app/'
  }
];

export const Proyects = () => {
  return (
    <>
      <Header />
      <motion.img 
        className="img-fullscreenPr" 
        src={imgProyects} 
        alt="Proyectos"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mis Proyectos
      </motion.h2>

      <main className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="project-image"/>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
              </div>
            </motion.div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
};

