//import { data } from '../data/dataset.js';

import { filterByContinent, sortBy, calculateFortuneStats } from '../lib/dataFunctions.js';

export function Home(props) {
    const viewEl = document.createElement('div');
    
    //Filtrar los datos por continente
    const filteredData = filterByContinent(data, props.continentFiltered);

    //Filtrar los datos
    const sortedData = sortBy(filteredData, props.sortBy);

    //Calcular la fortuna
    const[totalFortune, averageFortune] = calculateFortuneStats(filteredData);
    
    //Construir la representación visual de los datos
    viewEl.innerHTML = `
    <h1>ataverse Chat</h1>
    <div id="data-container">
        <p>Total de fortuna: $${totalFortune.totalLocalString()}</p>
        <p>Promedio de fortuna: $${averageFortune.totalLocalString()}</p>
        <ul id="rich-people-list">
        ${sortedData.map(item => `
          <li class="card">
            <img src="${item.imageUrl}" alt="${item.name}">
            <p>Nombre: ${item.name}</p>
            <p>Continente: ${item.extraInfo.continent}</p>
            <p>Fortuna: ${item.facts.fortune}</p>
            <p>Descripción: ${item.shortDescription}</p>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
    return viewEl;
};
export default Home;
