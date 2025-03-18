import React from 'react';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';
import imgProyects from '../../assets/img/img_home8.jpg';
import imgHoddie from '../../assets/img/hoddieHub.png'
import './Proyects.css';

const projects = [
  {
    id: 1,
    title: 'HoodieHub',
    description: 'Tienda en línea especializada en sudaderas personalizadas.',
    image: imgHoddie, 
    link: 'https://hoddie-hub.vercel.app/'
  },
  {
    id: 2,
    title: 'HoodieHub',
    description: 'Tienda en línea especializada en sudaderas personalizadas.',
    image: '../../assets/img/proyecto2.jpg',
    link: 'https://hoodiehub.com'
  },
  {
    id: 3,
    title: 'FinZen',
    description: 'Aplicación de gestión financiera para el control de ingresos y gastos.',
    image: '../../assets/img/proyecto3.jpg',
    link: 'https://finzen.com'
  }
];

export const Proyects = () => {
  return (
    <>
      <Header />
      <img className="img-fullscreenPr" src={imgProyects} alt="Proyectos" />
      <h2>Mis Proyectos</h2>
      <main className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image"/>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

