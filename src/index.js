// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import Home from './views/Home.js';
//import About from './views/About.js';
import error from './views/error.js';
import { setRootEl, setRoutes, onURLChange} from './router.js';
import  richPerson  from './views/richPerson.js';
import saveApiKey from './views/saveApiKey.js';
import panel from './views/panel.js'

const routes = {
  "/": Home,  
  "/richPerson": richPerson,
  "/apikey": saveApiKey,
  "/error": error,
  "/panel": panel
};

window.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  setRootEl(rootEl);
  setRoutes(routes);
  onURLChange(window.location); 
});

//Controlado de eventos que se dispara cuando el usuario navega hacia atras o adelante
window.addEventListener("popstate", () => {
  onURLChange(window.location); 
});
