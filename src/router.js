let ROUTES = {};
let rootEl;

// Establece el elemento raiz donde va el renderizado de las vistas
export const setRootEl = (el) => {
  rootEl = el;
  return rootEl;
};

// Establecer rutas disponibles
export const setRoutes = (routes) => {
  ROUTES = routes;
  return ROUTES;
};

// Limpia  el contenido actual del elemeto raiz, asocia la ruta y la renderiza
export const renderView = (pathname, props={}) => {
  rootEl.innerHTML = '';
  const view = ROUTES[pathname] || ROUTES["/error"];
  rootEl.appendChild(view(props));
};

// Convierte una cadena de consulta en un objeto
export const queryStringToObject = (queryString) => {
  const searchParams = new URLSearchParams(queryString);
  const objectSearchParams = Object.fromEntries(searchParams);
  return objectSearchParams;
}

// Cambia la URL y renderiza la visa correspindiente a la nueva URL y pasa los parametros de consulta
export const navigateTo = (pathname, props={}) => {
  window.history.pushState({}, pathname, `${window.location.origin+pathname}${props?`?${ new URLSearchParams(props)}`:''}`);
  renderView(pathname, props);
}

// Maneja el cambio de la URL, extraze los parametros de la nueva URL y renderiza la vista correspondiente
export const onURLChange = (location) => {
  const searchParams = queryStringToObject(location.search);
  renderView(location.pathname, searchParams);
};