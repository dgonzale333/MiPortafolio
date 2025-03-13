import React from 'react';
import './Li.css'
import logo from '../../../../public/vite.svg'
import { Link } from 'react-router-dom'; // 📌 Importa Link de React Router


export const Li = () => {
  return (
    <>

    <div className="nav-li" >
      <div className="logo-header">
    <img  src= {logo} alt="" />
    <h1 >David</h1>
    </div>
    <ul className='ul-nav'>
        <li><Link to="/" className='li-a'>Inicio</Link></li>
        <li><Link to="/proyectos" className='li-a'>Proyectos</Link></li> {/* 📌 Usa "to" en lugar de "href" */}
        <li><Link to="/" className='li-a'>Contacto</Link></li>
      </ul>
      
      </div>
    </>
  );
};



