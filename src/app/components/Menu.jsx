import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import MiLogo from "../../assets/imagenes/c.png"; // Importa el logo desde la ruta correcta

const Menu = () => {
    const { t, i18n } = useTranslation();
    const [toggled, setToggled] = useState(false);
    const [navColor, setNavColor] = useState('bg-green-200'); // Elimina el espacio extra al final

    const openMenu = () => {
        setToggled(true);
    }

    const closeMenu = () => {
        setToggled(false);
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const changeNavColor = (color) => {
        setNavColor(color);
    }

    return (
        <header className={`${navColor} text-black flex items-center justify-between p-4 md:p-2`}>
            <div className='flex items-center'>
                <a href='#inicio1' className='text-black font-roboto text-3xl tracking-wider flex items-center justify-end' onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                    <img src={MiLogo} alt="Logo" className="w-10 h-10 mr-2" /> {/* Ajusta el tamaño del logo */}
                    {t('')} {/* Elimina este texto */}
                </a>
                <nav className='hidden md:block ml-8 space-x-4'>
                    <a href='#inicio1' className='-indigo-800 rounded-full px-10 py-2 text-xl'>{t('home')}</a>
                    <a href='#proyectos' className='-indigo-800 rounded-full px-5 py-2 text-xl'>{t('projects')}</a>
                    <a href="#habilidades" className='-indigo-800 rounded-full px-5 py-2 text-xl'>{t('skills')}</a>
                    <a href="#contactos" className='-indigo-800 rounded-full px-5 py-2 text-xl'>{t('contact')}</a>
                    <a href="#Testimonio" className='-indigo-800 rounded-full px-5 py-2 text-xl'>{t('Testimonio')}</a>
                </nav>
            </div>
            <div className='md:hidden'>
                {toggled ? (
                    <AiOutlineClose onClick={closeMenu} size={40} className='text-black cursor-pointer'/>
                ) : (
                    <FaBars onClick={openMenu} size={30} className='text-black cursor-pointer'/>
                )}
            </div>
            {toggled && (
                <nav className='md:hidden'>
                    <ul className='flex flex-col items-center mt-40'>
                        <li><a href='#inicio1' className='text-black text-xl cursor-pointer'>{t('home')}</a></li>
                        <li><a href='#proyectos' className='text-black text-xl cursor-pointer'>{t('projects')}</a></li>
                        <li><a href='#habilidades' className='text-black text-xl cursor-pointer'>{t('skills')}</a></li>
                        <li><a href='#contactos' className='text-black text-xl cursor-pointer'>{t('contact')}</a></li>
                        <li><a href='#Testimonio' className='text-black text-xl cursor-pointer'>{t('Testimonio')}</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Menu;
