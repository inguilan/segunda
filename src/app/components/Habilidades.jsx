import React from 'react';
import { useTranslation } from 'react-i18next';
import { DiAngularSimple, DiCss3, DiDocker, DiGit, DiHtml5, DiJava, DiJsBadge, DiMysql, DiNodejs, DiPostgresql, DiPython, DiReact } from 'react-icons/di';
import 'tailwindcss/tailwind.css';

const Habilidades = () => {
  const habilidades = [
    { id: 1, nombre: 'Python', descripcion: 'Lenguaje de programación versátil y potente.', icono: <DiPython size={24} /> },
    { id: 2, nombre: 'JavaScript', descripcion: 'Lenguaje de programación para desarrollo web.', icono: <DiJsBadge size={24} /> },
    { id: 3, nombre: 'React', descripcion: 'Biblioteca de JavaScript para construir interfaces de usuario.', icono: <DiReact size={24} /> },
    { id: 4, nombre: 'Git', descripcion: 'Sistema de control de versiones distribuido.', icono: <DiGit size={24} /> },
    { id: 6, nombre: 'MySQL', descripcion: 'Sistema de gestión de bases de datos relacional.', icono: <DiMysql size={24} /> },
    { id: 9, nombre: 'Node.js', descripcion: 'Entorno de ejecución para JavaScript fuera del navegador.', icono: <DiNodejs size={24} /> },
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
            <div key={habilidad.id} className="flex flex-col items-center justify-center p-4 border border-black rounded-md">
              <div className="mr-2">{habilidad.icono}</div>
              <h2 className="text-lg font-medium mb-1">{habilidad.nombre}</h2>
              <p className="text-sm text-center">{habilidad.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
