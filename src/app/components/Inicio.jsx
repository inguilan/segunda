import React from 'react';

const Inicio = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-100 to-blue-200">
      <div className="max-w-4xl px-6 text-left flex items-center">
        <div className="flex-none mr-16"> {/* Ajuste el margen derecho aquí */}
          <img src="src/assets/imagenes/vector-png.png" alt="Descripción" className="rounded-full shadow-xl" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flex-grow ml-16"> {/* Ajuste el margen izquierdo aquí */}
          <h1 className="text-6xl font-bold text-gray-800 mb-8">DAVID INGUILAN</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Como ingeniero de software dedicado, poseo una sólida formación académica y una sed insaciable de aprendizaje y crecimiento en el ámbito tecnológico. Mi objetivo es contribuir al desarrollo de soluciones de software robustas mientras amplío continuamente mi experiencia en programación y me mantengo al tanto de las tecnologías emergentes y las tendencias de la industria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
