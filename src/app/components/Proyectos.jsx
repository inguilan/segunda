import React from 'react';
import { useTranslation } from 'react-i18next';
import 'tailwindcss/tailwind.css';
import contraimagen from '../../assets/imagenes/passwordgenerator.webp';
import cafeimagen from '../../assets/imagenes/cafeterias.webp';
import peliimagen from '../../assets/imagenes/apipeliculas.png';

const Proyectos = () => {
  const { t } = useTranslation(); 
  const proyectos = [
    { 
      id: 1, 
      nombre: t('API de películas usando Django REST Framework'), 
      descripcion: t('Desarrollo de una API de películas utilizando Django REST Framework para la gestión de datos y la creación de puntos finales de API.'), 
      imagen: peliimagen , 
      
    },
    { 
      id: 2, 
      nombre: t('Sitio web de ventas de café impulsado por base de datos de Azure'), 
      descripcion: t('Desarrollo de un sitio web de ventas de café utilizando una base de datos de Azure para el almacenamiento y recuperación de datos.'), 
      imagen: cafeimagen, 
      github: 'https://github.com/usuario/hoja'
    },
    { 
      id: 3, 
      nombre: t('Generador de Contraseñas Seguras'), 
      descripcion: t('Desarrollo de un generador de contraseñas seguro para crear contraseñas fuertes y aleatorias para uso en línea.'), 
      imagen: contraimagen, 
      github: 'https://github.com/usuario/noche'
    },
  ]; 

  return (
    <div id='proyectos' className="py-20 bg-gray-900 text-black">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">{t('proyectos_title')}</h1>
          <div className="bg-green-600 w-32 h-3 mx-auto mb-2 rounded-full"></div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="border border-gray-500 rounded-md overflow-hidden">
              <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-96 object-cover" />
              <div className="p-6">
                <h2 className="font-bold text-xl mb-4">{proyecto.nombre}</h2>
                <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>
                <div className="flex justify-center gap-4">
                  <a href={proyecto.github} className='text-black p-2 px-4 py-1 rounded-full bg-gray-700 hover:bg-gray-1000 transition duration-500' target="_blank" rel="noopener noreferrer"></a>
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
