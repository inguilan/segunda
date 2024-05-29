import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsEnvelope, BsGithub, BsLinkedin } from 'react-icons/bs';

const Contactos = () => {
  const { t } = useTranslation(); 

  return (
    <footer id='contactos' className="py-10 bg-gray-800 text-black">
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <BsGithub size={40} className='hover:text-gray-500 transition duration-300 ease-in-out' />
            </a>
            <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
              <BsEnvelope size={40} className='hover:text-pink-500 transition duration-300 ease-in-out' />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contactos;
