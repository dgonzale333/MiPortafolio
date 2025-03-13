import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Proyects } from './components/pages/Proyects';
import './index.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyectos" element={<Proyects />} />
    </Routes>
  );
};

export default App;
