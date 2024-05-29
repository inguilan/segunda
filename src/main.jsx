
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/components/App.jsx';
import './assets/styles/index.css';
import './i18n.js';

createRoot(document.getElementById('root')).render( 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
