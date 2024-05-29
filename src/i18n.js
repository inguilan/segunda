import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hello_world: 'Hello World',
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      proyectos_title: 'Projects', 

    },
  },
  es: {
    translation: {
      hello_world: 'Hola Mundo',
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contactos',
     
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
