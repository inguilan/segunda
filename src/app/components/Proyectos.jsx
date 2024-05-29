import React from 'react';
import { useTranslation } from 'react-i18next';
import 'tailwindcss/tailwind.css';
import contraimagen from '../../assets/imagenes/passwordgenerator.webp';
import cafeimagen from '../../assets/imagenes/cafeterias.webp';
import peliimagen from '../../assets/imagenes/apipeliculas.png';

const Proyectos = () => {
  const { t } = useTranslation(); 
  const proyectos = [
    { id: 1, nombre: t('proyecto_corazon'), imagen: peliimagen , github: 'https://github.com/usuario/corazon', demo: 'https://tudemo.com/corazon' },


    
    { id: 2, nombre: t('proyecto_hoja'), imagen: cafeimagen, github: 'https://github.com/usuario/hoja', demo: 'https://tudemo.com/hoja' },
    { id: 3, nombre: t('proyecto_noche'), imagen: contraimagen, github: 'https://github.com/usuario/noche', demo: 'https://tudemo.com/noche' },
  ]; 

  return (
    <div id='proyectos' className="py-20 bg-gray-900 text-black">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">{t('proyectos_title')}</h1>
          <div className="bg-green-600 w-32 h-3 mx-auto mb-2 rounded-full"></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 justify-center">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="border border-gray-500 rounded-md overflow-hidden">
              <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-4">{proyecto.nombre}</h2>
                <div className="flex justify-center gap-4">
                  <a href={proyecto.github} className='text-black p-2 px-4 py-1 rounded-full bg-gray-700 hover:bg-gray-1000 transition duration-500' target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={proyecto.demo} className='text-black p-2 px-4 py-1 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300' target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;

