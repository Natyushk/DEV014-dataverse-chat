import { navigateTo } from "../router.js";
// Definición de la función renderItems corregida
export const renderItems = (dataArray) => {
  // Verificar si dataArray es un array
  if (!Array.isArray(dataArray)) {
    console.error("Data debe ser un array.");
    return; 
  }
  // Crear un nuevo ul 
  const newUl = document.createElement("ul");
  newUl.setAttribute("id", "rich-people-list");

  // Agregar una clase al contenedor para aplicar estilos flexbox
  newUl.classList.add("card-container");

  // Iterar sobre cada elemento en el array
  dataArray.forEach(element => {
    // Crear un nuevo li para cada elemento
    const newLi = document.createElement("li");
    newLi.classList.add("card");
    newLi.setAttribute("itemscope", "");
    newLi.setAttribute("itemtype", "https://schema.org/Person");
    newLi.addEventListener('click', () => {
      navigateTo('/richPerson', {id: element.id})
    })
    
    // Crear y configurar la imagen
    const nodoImg = document.createElement("img");
    nodoImg.src = element.imageUrl;
    newLi.appendChild(nodoImg);
    
    // Crear y configurar el párrafo con el nombre
    const newPName = document.createElement("p");
    newPName.classList.add("name");
    newPName.setAttribute("itemprop", "name");
    newPName.textContent = `Nombre: ${element.name}`
    newLi.appendChild(newPName);
    //newPName.innerHTML = element.name;
    
    // Crear y configurar el párrafo con el continente
    const newPContinent = document.createElement("p");
    newPContinent.classList.add("continent");
    //newPContinent.textContent = `Continente: ${element.extraInfo.continent}`
    newLi.appendChild(newPContinent);
    newPContinent.innerHTML = element.extraInfo.continent;
    
    // Crear y configurar el párrafo con la fortuna
    const newPFortune = document.createElement("p");
    newPFortune.classList.add("fortune");
    //newPFortune.textContent = `Fortuna: ${element.facts.fortune}`
    newLi.appendChild(newPFortune);
    newPFortune.innerHTML = element.facts.fortune;
    
    // Crear y configurar el párrafo con la descripción corta
    const newPshortDescription = document.createElement("p");
    newPshortDescription.classList.add("short-description");
    //newPFortune.textContent = `Fortuna: ${element.facts.fortune}`
    newLi.appendChild(newPshortDescription);
    newPshortDescription.innerHTML = element.shortDescription;
    
    newUl.appendChild(newLi);
    //newP.innerHTML = element.name + element.extraInfo.continent;

  });

  return newUl;

};