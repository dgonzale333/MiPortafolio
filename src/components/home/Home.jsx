import React, { useState, useEffect } from 'react';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer.jsx';
import imgHome from '../../assets/img/img_home8.jpg';
import imgSection from '../../assets/img/img_home2.jpg';
import imgDown from '../../assets/img/arrow.png';
import imgGit from '../../assets/img/github.png';
import imgJS from '../../assets/img/js.png';
import imgJAVA from '../../assets/img/java.png';
import imgC from '../../assets/img/documento.png';
import './Home.css';

export const Home = () => {
    const [isInView, setIsInView] = useState(false);

  // Detecta si la sección de habilidades está en vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.8 } // Se activa cuando al menos el 50% de la sección es visible
    );

    const section = document.querySelector('.section-skills');
    if (section) {
      observer.observe(section);
    }

    // Cleanup
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Función para animar el progreso
  const animateProgress = (id, targetValue) => {
    const progressBar = document.getElementById(id);
    if (progressBar) {
      let value = 0;
      const interval = setInterval(() => {
        if (value < targetValue) {
          value++;
          progressBar.value = value;
        } else {
          clearInterval(interval);
        }
      }, 10); // Intervalo de tiempo para el incremento del valor
    }
  };

  useEffect(() => {
    if (isInView) {
      // Al entrar la sección en vista, animar los <progress> con sus respectivos valores máximos
      animateProgress('github', 50);    // 50% para GitHub
      animateProgress('javascript', 60); // 60% para JavaScript
      animateProgress('java', 40);      // 40% para Java
      animateProgress('react', 80);     // 80% para React
      animateProgress('csharp', 70);    // 70% para C#
    }
  }, [isInView]);
   
   
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
                    <button className='bt-home1' onClick={() => scrollToSection('about')}>Mirar Más <img src= {imgDown} alt="arrow" className='ArrowDown' /></button>
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

            <h2 className="h2-skills">Mis Habilidades</h2>

<section className="section-skills">
  <div className="skills">
    <img src={imgGit} alt="" />
    <h3>GitHub</h3>
    <progress id="github" value="0" max="100"></progress>
  </div>
  <div className="skills">
    <img src={imgJS} alt="" />
    <h3>JavaScript</h3>
    <progress id="javascript" value="0" max="100"></progress>
  </div>
  <div className="skills">
    <img src={imgJAVA} alt="" />
    <h3>Java</h3>
    <progress id="java" value="0" max="100"></progress>
  </div>
  <div className="skills">
    <img src={imgSection} alt="" />
    <h3>React</h3>
    <progress id="react" value="0" max="100"></progress>
  </div>
  <div className="skills">
    <img src={imgC} alt="" />
    <h3>C#</h3>
    <progress id="csharp" value="0" max="100"></progress>
  </div>
</section>


            <Footer />
        </>
    );
};

