import React from 'react';

const Inicio = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-200">
      <div className="max-w-lg px-6 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-8">David</h1>
        <div className="mb-8">
          <img src="src/assets/imagenes/giphy.gif" alt="Descripción" className="rounded-lg shadow-md mx-auto" />
        </div>
        <p className="text-lg text-gray-400 leading-relaxed">
          Como ingeniero de software dedicado, poseo una sólida formación académica y una sed insaciable de aprendizaje y crecimiento en el ámbito tecnológico. Mi objetivo es contribuir al desarrollo de soluciones de software robustas mientras amplío continuamente mi experiencia en programación y me mantengo al tanto de las tecnologías emergentes y las tendencias de la industria.
        </p>
      </div>
    </div>
  );
};

export default Inicio;
