import data from '../Data/dataset.js';
import { header } from '../Components/header.js';
import { renderItems } from '../Components/layoutCards.js';
import { filterByContinent, sortBy, calculateFortuneStats, filterByName } from '../lib/dataFunctions.js';
import divStats from '../Components/divStats.js';
import searchSection from '../Components/searchSection.js';
import footer from '../Components/footer.js';
import noCoincidences from '../Components/noCoincidences.js';
import { sidebar } from '../Components/sidebar.js';

export function Home() {
  //Llamar componente header
  const homeContainer = document.createElement('section');
  homeContainer.appendChild(header());
  homeContainer.appendChild(sidebar('home'));
  homeContainer.appendChild(searchSection());
  homeContainer.appendChild(divStats());

  //Llamar a las tarjetas y limpieza
  const cardsContainer = document.createElement('div');
  cardsContainer.appendChild(renderItems(data));
  homeContainer.appendChild(cardsContainer);
  homeContainer.appendChild(footer());

  //sección de comportamiento
  const continentFilterSelect = homeContainer.querySelector('#continent-filter');
  const sortBySelect = homeContainer.querySelector('#sort-by');
  const totalFortuneElement = homeContainer.querySelector('#total-fortune');
  const averageFortuneElement = homeContainer.querySelector('#average-fortune');
  const searchInput = homeContainer.querySelector('#search-input');
  const resetButton = homeContainer.querySelector('#reset-button');

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

  return homeContainer;
}

export default Home;
