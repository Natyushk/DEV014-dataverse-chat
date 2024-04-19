let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
  return rootEl;
};

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  ROUTES = routes;
  return ROUTES;
};


export const renderView = (pathname, props={}) => {
  rootEl.innerHTML = '';
  const view = ROUTES[pathname] || ROUTES["./error"];
  rootEl.appendChild(view(props));
};

export const queryStringToObject = (queryString) => {
  const searchParams = new URLSearchParams(queryString);
  const objectSearchParams = Object.fromEntries(searchParams);
  return objectSearchParams;
  // return the object
}

export const navigateTo = (pathname, props={}) => {
  window.history.pushState({}, '', pathname);
  renderView(pathname, props);
}

export const onURLChange = (location) => {
  const searchParams = queryStringToObject(location.search);
  renderView(location.pathname, searchParams);
  
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
};