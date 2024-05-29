import React from 'react';
import AnimacionFondo from './Animacion-fondo';
import Contactos from './Contactos';
import Habilidades from './Habilidades';
import Inicio from './Inicio';
import Menu from './Menu';
import Proyectos from './Proyectos';
import Testimonio from './Testimonio'; // Cambio aquí

function App() {
  return (
    <div className='bg-verde-pizarra'>

      <header className="sticky top-0 z-80 backdrop-blur-lg bg-gradient-to-b from-black">
        <Menu />
      </header>

      <main className="mt-0">
        <AnimacionFondo/>
        <Inicio/>
        <Proyectos/>
        <Habilidades/>
        <Testimonio/> 
        <Contactos/>  
       
      </main>
    
    </div>
  );
}

export default App;
