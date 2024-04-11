import  data  from '../data/dataset.js';
import { filterByContinent, sortBy, calculateFortuneStats } from '../lib/dataFunctions.js';

export function Home() {
    const viewEl = document.createElement('div');
    
    //Construir la representación visual de los datos
    viewEl.innerHTML = `
  <main id="root">
    <section>
      <label for="continent-filter">Filtrar por continente:</label>
      <select name="continente" id="continent-filter" data-testid="select-filter" >
        <option value="Todos">Todos</option>
        <option value="Oceanía">Oceanía</option>
        <option value="América">América</option>
        <option value="Asia">Asia</option>
        <option value="Africa">África</option>
        <option value="Europa">Europa</option>
        <option value="Antartida">Antártida</option>
      </select>
    <label for="sort-by">Ordenar por:</label>
    <select name="name" id="sort-by" data-testid="select-sort">
      <option value="asc">Nombre (A-Z)</option>
      <option value="desc">Nombre (Z-A)</option>
      <option value="fortune-asc">Fortuna (Ascendente)</option>
      <option value="fortune-desc">Fortuna (Descendente)</option>
    </select>
    <button data-testid="button-clear" id="reset-button">Limpiar</button>
    </section>
    <div id="fortune-stats">
      <p id="total-fortune">Suma total de fortunas:</p>
      <p id="average-fortune">Promedio de fortunas:</p>
    </div>
  </main>
</body>`;
 //Filtrar los datos por continente
   // const filteredData = filterByContinent(data, props.continentFiltered);

    //Filtrar los datos
    //const sortedData = sortBy(filteredData, props.sortBy);

    //Calcular la fortuna
    //const[totalFortune, averageFortune] = calculateFortuneStats(filteredData);
    

   //Sección de comportamiento select Filter
   // Referencias a elementos del DOM
const continentFilterSelect = viewEl.querySelector('#continent-filter');
const sortBySelect = viewEl.querySelector('#sort-by');
const totalFortuneElement = viewEl.querySelector('#total-fortune');
const averageFortuneElement = viewEl.querySelector('#average-fortune');
const resetButton = viewEl.querySelector('#reset-button');

//    const continent = viewEl.querySelector("#continent-filter");
//    continent.addEventListener("change", function (){
//     console.log("Hola");
//    })

    return viewEl;
};
export default Home;
