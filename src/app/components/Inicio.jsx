import React from 'react';
import vector from "../../assets/imagenes/vector-png.png"

const Inicio = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-100 to-blue-200">
      <div className="max-w-4xl px-6 text-left flex flex-col items-center"> {/* Cambiado a flex-col */}
        <div className="mb-10"> {/* Agregado margen inferior */}
          <img src={vector} alt="Descripción" className="rounded-full shadow-xl" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flex-grow">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">David</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Como ingeniero de software dedicado, poseo una sólida formación académica y una sed insaciable de aprendizaje y crecimiento en el ámbito tecnológico. Mi objetivo es contribuir al desarrollo de soluciones de software robustas mientras amplío continuamente mi experiencia en programación y me mantengo al tanto de las tecnologías emergentes y las tendencias de la industria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
