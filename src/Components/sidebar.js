export function sidebar(actualPath) {
  //Crear contenedor para el navbar
  const navbarContainer = document.createElement('div');
  navbarContainer.innerHTML = `
   <div id="navbar">
   <ul id="nav-links">
   <li><a href="#">Chat grupal</a></li>
   <li><a href="#">Api Key</a></li>
   </ul>
   </div>
   `;

  const navLinks = navbarContainer.querySelector('#nav-links');
  // Generar los enlaces según la vista actual
  if (actualPath === 'home') {
    // Vista home: mostrar "Chat grupal" y "Api key"
    navLinks.innerHTML = '<li><a href="#">Chat grupal</a></li>' + '<li><a href="#">Api Key</a></li>';
  } else if (actualPath === 'richPerson') {
    // Vista richPerson: mostrar "Chat grupal", "Inicio" y "Api key"
    navLinks.innerHTML = '<li><a href="#">Chat grupal</a></li>' +
      '<li><a href="#">Inicio</a></li>' + '<li><a href="#">Api Key</a></li>';
  } else if (actualPath === 'groupChat') {
    // Vista groupChat: solo mostrar "Inicio" y "Api key"
    navLinks.innerHTML = '<li><a href="#">Inicio</a></li>' + '<li><a href="#">Api Key</a></li>';
  }

  return navbarContainer;

}