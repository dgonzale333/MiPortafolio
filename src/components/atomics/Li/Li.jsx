import React from 'react';
import './Li.css'
import logo from '../../../../public/vite.svg'


export const Li = () => {
  return (
    <>

    <div className="nav-li">
      <div className="logo-header">
    <img  src= {logo} alt="" />
    <h1 >David</h1>
    </div>
      <ul className='ul-nav'>
      <li><a href="" className='li-a'>Inicio</a></li>
      <li><a href="" className='li-a'>Proyectos</a></li>
      <li><a href="" className='li-a'>Contacto</a></li>
      </ul>
      
      </div>
    </>
  );
};



