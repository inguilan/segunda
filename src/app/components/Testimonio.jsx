import React from 'react';
import { motion } from 'framer-motion'; // Importa motion desde framer-motion
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
    <div id='testimonios' className="relative py-20 bg-green-200 text-black">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          {/* Utiliza motion.div para envolver el título */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold mb-3">Testimonios</h1>
            <div className="bg-green-600 w-32 h-3 mx-auto mb-2 rounded-full"></div>
          </motion.div>
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
      {/* Estrellas */}
      <div className="absolute bottom-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFD700" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,138.7C672,128,768,160,864,192C960,224,1056,256,1152,240C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Testimonios;
