import React, { useState } from 'react';
import './Li.css';
import logo from '../../../../public/vite.svg';
import { Link } from 'react-router-dom';

export const Li = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna entre abierto y cerrado
  };

  return (
    <div className="nav-li">
      <div className="logo-header">
        <img src={logo} alt="Logo" />
        <h1>David</h1>
      </div>

      {/* Menú Hamburguesa */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Clases dinámicas para mostrar u ocultar el menú */}
      <ul className={`ul-nav ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" className="li-a">Inicio</Link></li>
        <li><Link to="/proyectos" className="li-a">Proyectos</Link></li>
        <li><Link to="/contacto" className="li-a">Contacto</Link></li>
      </ul>
    </div>
  );
};


