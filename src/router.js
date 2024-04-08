let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
    rootEl = el;
};

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  ROUTES = routes;
};

export const renderView = (pathname, props={}) => {
    const view = ROUTES[pathname] || ROUTES['/error'];
    const viewEl = view.props;
    rootEl.innerHTML = '';
    rootEl.appendChild(viewEl);
  };

export const navigateTo = (pathname, props={}) => {
    window.history.pushState({}, '', pathname);
    renderView(pathname, props);
  }

export const onURLChange = (location) => {
    const pathname = window.location.pathname
    renderView(pathname);
    // parse the location for the pathname and search params
    // convert the search params to an object
    // render the view with the pathname and object
  };