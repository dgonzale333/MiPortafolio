import React from 'react';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import imgContact from '../../assets/img/img_home8.jpg';
import './Contact.css';

export const Contact = () => {
  return (
    <>
      <Header />
      <main className="contact-container">
        <motion.img
          className="img-fullscreenCt"
          src={imgContact}
          alt="Fondo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>¡Conéctate conmigo!</h2>
          <p>Sígueme en mis redes sociales</p>
          
          <div className="icons-container">
            <motion.a 
              href="https://www.instagram.com/dgonzx_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon instagram"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>

            <motion.a 
              href="https://www.facebook.com/tuusuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon facebook"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook />
            </motion.a>

            <motion.a 
              href="https://github.com/dgonzale333" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon github"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a 
              href="https://wa.me/+573002130258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon whatsapp"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
            </motion.a>

            <motion.a 
              href="mailto:davidgonzalezdiaz2305@gmail.com" 
              className="social-icon email"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

