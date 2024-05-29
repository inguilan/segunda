import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsEnvelope, BsGithub, BsLinkedin,  } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';

const Contactos = () => {
  const { t } = useTranslation(); 

  return (
    <footer id='contactos' className="py-10 bg-green-200 text-black relative">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3">{t('contact')}</h1>
          <div className="bg-green-600 w-32 h-3 mx-auto mb-2 rounded-full"></div>
        </div>
        <div className='flex justify-center'>
          <div className='flex space-x-8'>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <BsLinkedin size={40} className='hover:text-blue-500 transition duration-300 ease-in-out' />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <BsGithub size={40} className='hover:text-gray-500 transition duration-300 ease-in-out' />
            </a>
        
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane size={40} className='hover:text-blue-400 transition duration-300 ease-in-out' />
            </a>
            <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
              <BsEnvelope size={40} className='hover:text-red-500 transition duration-300 ease-in-out' />
            </a>
          </div>
        </div>
        <div className="absolute top-4 right-4 text-lg text-gray-700">
          <a href="mailto:dg4834307@gmail.com" className="hover:underline">dg4834307@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Contactos;
