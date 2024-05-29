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
      github: 'GitHub', 
      demo: 'Demo',
      proyecto_corazon: 'HEART SYSTEM', 
      proyecto_hoja: 'LEAF SYSTEM', 
      proyecto_noche: 'NIGHT SYSTEM', 
      proyecto_robot: 'ROBOT SYSTEM',
      hello_text: 'Hello, I am',
      software_engineer: 'Software Engineer',
      innovative_ideas: 'With innovative ideas',
    },
  },
  es: {
    translation: {
      hello_world: 'Hola Mundo',
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contactos',
      proyectos_title: 'Proyectos', 
      github: 'GitHub', 
      demo: 'Demo', 
      proyecto_corazon: 'SISTEMA DEL CORAZÓN',
      proyecto_hoja: 'SISTEMA DE LA HOJA', 
      proyecto_noche: 'SISTEMA DE NOCHE', 
      proyecto_robot: 'SISTEMA DE ROBOT', 
      hello_text: 'Hola, soy',
      software_engineer: 'Ingeniero de software',
      innovative_ideas: 'Con ideas innovadoras',
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
