export function sidebar(actualPath) {
  //Crear contenedor para el navbar
  const navbarContainer = document.createElement('div');
  navbarContainer.innerHTML = `
   <div id="navbar">
   <a href="#">Chat grupal</a>
   <a href="#">Api Key</a>
   </div>
   `;

  const navLinks = navbarContainer.querySelector('#navbar');
  // Generar los enlaces según la vista actual
  if (actualPath === 'home') {
    // Vista home: mostrar "Chat grupal" y "Api key"
    navLinks.innerHTML = '<a class= "links" href="/panel">Chat grupal</a>' + '<a class= "links" href="/apikey">Api Key</a>';
  } else if (actualPath === 'richPerson') {
    // Vista richPerson: mostrar "Chat grupal", "Inicio" y "Api key"
    navLinks.innerHTML = '<a class= "links" href="panel">Chat grupal</a>' +
      '<a class= "links" href="/">Inicio</a>' + '<a class= "links" href="/apikey">Api Key</a>';
  } else if (actualPath === 'panel') {
    // Vista groupChat: solo mostrar "Inicio" y "Api key"
    navLinks.innerHTML = '<a class= "links" href="/">Inicio</a>' + '<a class= "links" href="/apikey">Api Key</a>';
  }

  return navbarContainer;

}