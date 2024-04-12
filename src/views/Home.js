import  data  from '../Data/dataset.js';
import  {header}  from '../Components/header.js';
import {selects} from '../Components/selects.js';
import { renderItems } from '../Components/layoutCards.js';
import { filterByContinent, sortBy, calculateFortuneStats } from '../lib/dataFunctions.js';
import divStats from '../Components/divStats.js';

export function Home() {
    //Llamar componente header
    const body = document.querySelector('body');
    body.insertBefore(header(), body.children[0]);

    //Llamar componente con section de select para filtro, select para ordenar y botón limpiar
    const main = document.querySelector('main');
    main.appendChild(selects());

    //Llamar componente div con for
    main.appendChild(divStats());

 const continentFilterSelect = main.querySelector('#continent-filter');
 const sortBySelect = main.querySelector('#sort-by');
 const totalFortuneElement = main.querySelector('#total-fortune');
 const averageFortuneElement = main.querySelector('#average-fortune');
 const resetButton = main.querySelector('#reset-button');

let richPeopleList = document.querySelector("main").appendChild(renderItems(sortBy(data, 'asc')));

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
    richPeopleList.remove();
    richPeopleList = document.querySelector("main").appendChild(renderItems(filteredData));
    updateFortuneStats(filteredData);
  });
  
  // Manejador de evento para cambio en select para ordenar
  sortBySelect.addEventListener('change', () => {
    const order = sortBySelect.value;
    const sortedData = sortBy(filterByContinent(data,continentFilterSelect.value), order);
    richPeopleList.remove();
    richPeopleList = document.querySelector("main").appendChild(renderItems(sortedData));
    updateFortuneStats(sortedData);
  });
  
  //Función para boton limpiar
  resetButton.addEventListener('click', () => {
    continentFilterSelect.value = 'Todos';
    sortBySelect.value = 'asc';
    richPeopleList.remove();
    richPeopleList = document.querySelector("main").appendChild(renderItems(sortBy(data, 'asc')));
    updateFortuneStats(data);
  });

return richPeopleList;
};
export default Home;
