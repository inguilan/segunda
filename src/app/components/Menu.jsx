import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { VscCode } from "react-icons/vsc";

const Menu = () => {
    const { t, i18n } = useTranslation();
    const [toggled, setToggled] = useState(false);
    const [navColor, setNavColor] = useState('bg-gray-900'); // Estado para el color de fondo de la barra de navegación

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
        <header className={`${navColor} text-white flex items-center justify-between p-4 md:p-8`}>
            <div className='flex items-center'>
                <a href='#inicio1' className='text-black font-roboto text-3xl tracking-wider flex items-center' onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                    <VscCode className='mr-2' />
                    {t('code')}
                </a>
                <nav className='hidden md:block ml-8 space-x-4'>
                    <a href='#' className='hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>{t('home')}</a>
                    <a href='#proyectos' className='hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>{t('projects')}</a>
                    <a href="#habilidades" className='hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>{t('skills')}</a>
                    <a href="#contactos" className='hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>{t('contact')}</a>
                </nav>
            </div>
            <div className='md:hidden'>
                {toggled ? (
                    <AiOutlineClose onClick={closeMenu} size={30} className='text-black cursor-pointer'/>
                ) : (
                    <HiMenuAlt1 onClick={openMenu} size={30} className='text-black cursor-pointer'/>
                )}
            </div>
            {toggled && (
                <nav className='md:hidden'>
                    <ul className='flex flex-col items-center mt-4'>
                        <li><a href='#' className='text-black text-xl cursor-pointer'>{t('home')}</a></li>
                        <li><a href='#proyectos' className='text-black text-xl cursor-pointer'>{t('projects')}</a></li>
                        <li><a href='#habilidades' className='text-black text-xl cursor-pointer'>{t('skills')}</a></li>
                        <li><a href='#contactos' className='text-black text-xl cursor-pointer'>{t('contact')}</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Menu;
