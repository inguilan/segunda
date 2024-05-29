import React from 'react';
import { useTranslation } from 'react-i18next';
import { DiPython, DiJsBadge, DiReact, DiGit, DiMysql, DiNodejs } from 'react-icons/di';
import 'tailwindcss/tailwind.css';

const Habilidades = () => {
  const habilidades = [
    { id: 1, nombre: 'Python', descripcion: 'Lenguaje de programación versátil y potente.', icono: <DiPython size={48} /> },
    { id: 2, nombre: 'JavaScript', descripcion: 'Lenguaje de programación para desarrollo web.', icono: <DiJsBadge size={48} /> },
    { id: 3, nombre: 'React', descripcion: 'Biblioteca de JavaScript para construir interfaces de usuario.', icono: <DiReact size={48} /> },
    { id: 4, nombre: 'Git', descripcion: 'Sistema de control de versiones distribuido.', icono: <DiGit size={48} /> },
    { id: 6, nombre: 'MySQL', descripcion: 'Sistema de gestión de bases de datos relacional.', icono: <DiMysql size={48} /> },
    { id: 9, nombre: 'Node.js', descripcion: 'Entorno de ejecución para JavaScript fuera del navegador.', icono: <DiNodejs size={48} /> },
  ];

  const { t } = useTranslation();

  return (
    <div id='habilidades' className="py-10 bg-gray-900 text-black">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">{t('skills')}</h1>
          <div className="bg-green-600 w-32 h-3 mx-auto mb-2 rounded-full"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
          {habilidades.map((habilidad) => (
            <div key={habilidad.id} className="flex flex-col items-center justify-center p-4 border border-black rounded-full h-48 w-48 mx-auto shadow-lg">
              <div className="text-6xl mb-2">{habilidad.icono}</div>
              <h2 className="text-lg font-medium mb-1 text-center">{habilidad.nombre}</h2>
              <p className="text-sm text-center">{habilidad.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
