import React from 'react';
import 'tailwindcss/tailwind.css';

const Testimonios = () => {
  const testimonios = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      cargo: 'CEO, Empresa X',
      testimonio: 'Excelente trabajo. Estoy muy impresionado con la calidad del trabajo realizado por David. Siempre cumple con los plazos y supera nuestras expectativas.',
    },
    {
      id: 2,
      nombre: 'María García',
      cargo: 'Gerente de Proyectos, Empresa Y',
      testimonio: 'David es un desarrollador muy talentoso y dedicado. Su capacidad para resolver problemas complejos y su atención al detalle son admirables.',
    },
    {
      id: 3,
      nombre: 'Carlos Martínez',
      cargo: 'Director de Tecnología, Empresa Z',
      testimonio: 'Trabajar con David ha sido una experiencia muy positiva. Su profesionalismo y habilidades técnicas son impresionantes. Lo recomendaría sin dudarlo.',
    },
  ];

  return (
    <div id='testimonios' className="py-20 bg-green-200 text-black">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">Testimonios</h1>
          <div className="bg-green-600 w-32 h-3 mx-auto mb-2 rounded-full"></div>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 justify-center">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="border border-gray-500 rounded-md overflow-hidden">
              <div className="p-6">
                <h2 className="font-bold text-xl mb-2">{testimonio.nombre}</h2>
                <p className="text-gray-400 mb-2">{testimonio.cargo}</p>
                <p className="text-gray-600 mb-4">{testimonio.testimonio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
