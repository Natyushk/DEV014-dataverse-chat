// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import Home from './views/Home.js';
//import About from './views/About.js';
import error from './views/error.js';
import { setRootEl, setRoutes, onURLChange} from './router.js';
import  richPerson  from './views/richPerson.js';
import saveApiKey from './views/saveApiKey.js';

const routes = {
  "/": Home,  
  "/richPerson": richPerson,
  "/apikey": saveApiKey,
  "/error": error
};

window.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  setRootEl(rootEl);
  setRoutes(routes);
  onURLChange(window.location); 
});

window.addEventListener('popstate', (event) =>{
  const state = event.state;
  onURLChange(document.location, state);
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/