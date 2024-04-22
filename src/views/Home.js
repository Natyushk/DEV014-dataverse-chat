import data from '../Data/dataset.js';
import { header } from '../Components/header.js';
import { renderItems } from '../Components/layoutCards.js';
import { filterByContinent, sortBy, calculateFortuneStats, filterByName } from '../lib/dataFunctions.js';
import divStats from '../Components/divStats.js';
import searchSection from '../Components/searchSection.js';
import footer from '../Components/footer.js';
//import Sidebar from '../Components/sidebar.js';

//import saveApiKey from '../Components/saveApiKey.js';
import noCoincidences from '../Components/noCoincidences.js';

export function Home() {
  //Llamar componente header
  const homeContainer = document.createElement('section');
  homeContainer.appendChild(header());
  homeContainer.appendChild(searchSection());
  homeContainer.appendChild(divStats());
  //Llamar a las tarjetas y limpieza
  const cardsContainer = document.createElement('div');
  cardsContainer.appendChild(renderItems(data));
  homeContainer.appendChild(cardsContainer);
  homeContainer.appendChild(footer());
  //Crear y agrega la barra lateral al contenedor principal
  /*const sidebar = new Sidebar();
  homeContainer.appendChild(sidebar);*/

  //sección de comportamiento
  const continentFilterSelect = homeContainer.querySelector('#continent-filter');
  const sortBySelect = homeContainer.querySelector('#sort-by');
  const totalFortuneElement = homeContainer.querySelector('#total-fortune');
  const averageFortuneElement = homeContainer.querySelector('#average-fortune');
  const searchInput = homeContainer.querySelector('#search-input');
  const resetButton = homeContainer.querySelector('#reset-button');
  //const saveButton = homeContainer.querySelector('#save-apikey');

  // Función para actualizar y mostrar la fortuna total y el promedio
  const updateFortuneStats = (data) => {
    const [formattedTotalFortune, formattedAverageFortune] = calculateFortuneStats(data)
    totalFortuneElement.textContent = `Suma total de fortunas: $${formattedTotalFortune.toLocaleString('en')} B`;
    averageFortuneElement.textContent = `Promedio de fortunas: $${isNaN(formattedAverageFortune) ? 0 : formattedAverageFortune} B`;
  };

  // Actualizar las estadísticas de fortuna inicialmente
  updateFortuneStats(data);

  // Manejador de evento para cambio en select para filtrar por continente
  continentFilterSelect.addEventListener('change', () => {
    const continent = continentFilterSelect.value;
    const filteredData = filterByContinent(data, continent);
    sortBySelect.value = 'asc';
    cardsContainer.innerHTML = '';
    cardsContainer.appendChild(renderItems(filteredData));
    updateFortuneStats(filteredData);
    searchInput.value = ''
  });

  // Manejador de evento para cambio en select para ordenar
  sortBySelect.addEventListener('change', () => {
    const order = sortBySelect.value;
    const sortedData = sortBy(filterByContinent(data, continentFilterSelect.value), order);
    cardsContainer.innerHTML = '';
    cardsContainer.appendChild(renderItems(sortedData));
    updateFortuneStats(sortedData);
    searchInput.value = ''
  });

  //Manejador de evento para cambio en input de búsqueda
  searchInput.addEventListener('input', () => {
    //Obtener el valor del input
    const searchTerm = searchInput.value.trim();
    //Filtrar los datos según el valor del input
    const filteredData = filterByName(data, searchTerm);
    //Renderizar los resultados filtrados
    if (filteredData.length === 0) {
      cardsContainer.innerHTML = ''
      cardsContainer.appendChild(noCoincidences())
    }
    else {
      cardsContainer.innerHTML = ''
      cardsContainer.appendChild(renderItems(filteredData))
      updateFortuneStats(filteredData);
    }
  }); //Dentro de la función se ejecuta cada vez que el input cambia 

  //Función para boton limpiar
  resetButton.addEventListener('click', () => {
    continentFilterSelect.value = 'Todos';
    sortBySelect.value = 'asc';
    cardsContainer.innerHTML = '';
    cardsContainer.appendChild(renderItems(sortBy(data, 'asc')));
    updateFortuneStats(data);
    searchInput.value = '';
  });
  /*saveButton.addEventListener('click', () => {
    const inputApiKey = homeContainer.querySelector('#input-api-key').value;
    localStorage.setItem('API Key', inputApiKey)
    dialogApiKey.close();
  });*/


  //Mostrar Modal
  //dialogApiKey.showModal();

  return homeContainer;
}
export default Home;


//Estilos para el menu hamburguesa
/* Estilos para la barra lateral */
//.sidebar {
//  position: fixed;
//  top: 0;
//  left: 0;
//  height: 100vh;
//  width: 60px;
//  background-color: #333;
//  transition: width 0.3s ease-in-out;
//  z-index: 1000;
//  overflow: hidden;
//}
//
//.sidebar.open {
//  width: 200px;
//}
//
///* Estilos para el menú hamburguesa */
//.menu-toggle {
//  display: flex;
//  flex-direction: column;
//  justify-content: space-around;
//  height: 24px;
//  cursor: pointer;
//  padding: 10px;
//}
//
//.menu-toggle span {
//  width: 30px;
//  height: 3px;
//  background-color: #fff;
//}
//
///* Estilos para el menú de navegación */
//.menu {
//  list-style: none;
//  margin: 0;
//  padding: 0;
//}
//
//.menu a {
//  color: #fff;
//  text-decoration: none;
//  padding: 10px;
//  display: block;
//}