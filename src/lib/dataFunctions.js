
// Función para filtrar los datos por continente
export const filterByContinent = (data, continent) => {
  if (continent === 'Todos') {
    return data; // No aplicar ningún filtro si se selecciona 'Todos'
  } else {
    return data.filter(item => item.extraInfo.continent === continent);
  }
};

// Función para ordenar los datos por fortuna (mayor a menor o menor a mayor) o por nombre
export const sortBy = (data, sortOrder) => {
  if (sortOrder === 'fortune-asc' || sortOrder === 'fortune-desc') {
    return data.sort((a, b) => {
      const fortuneA = parseFortune(a.facts.fortune);
      const fortuneB = parseFortune(b.facts.fortune);
      return sortOrder === 'fortune-asc' ? fortuneA - fortuneB : fortuneB - fortuneA;
    });
  } else if (sortOrder === 'asc' || sortOrder === 'desc') {
    return data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
  }
};

// Función auxiliar para convertir la fortuna a un número
const parseFortune = (fortuneString) => {
  return parseFloat(fortuneString.replace(/[^\d.-]/g, ''));
};

// Función para calcular la suma total y el promedio de las fortunas
export const calculateFortuneStats = (data) => { 
  const filteredFortunes = data.map(item => parseFortune(item.facts.fortune));
  const totalFortune = filteredFortunes.reduce((total, fortune) => total + fortune, 0);
  const averageFortune = (totalFortune / filteredFortunes.length).toFixed(2);

  return [ totalFortune, averageFortune ];
};

// Función para realizar la busqueda por nombre 
export const filterByName = (data, searchTerm) => {
  //convertir el termnno de búsqueda a minusculas
  const searchTermLowerCase = searchTerm.toLowerCase();
  //Filtrar los datos por coincidencia de nombre 
  return data.filter(item => item.name.toLowerCase().includes(searchTermLowerCase));
};
/*//home
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  // 3. Obtener el valor del input
  const searchTerm = searchInput.value.trim();

  // 4. Filtrar los datos según el valor del input
  const filteredData = filterByName(data, searchTerm);

  // 5. Renderizar los resultados filtrados
  richPeopleList.remove();
  richPeopleList = document.querySelector("main").appendChild(renderItems(filteredData));

  //Actualizar estadisticas de busquedas
  updateFortuneStats(filteredData);
});

  // Mostrar mensaje si no hay coincidencias
  if (filteredData.length === 0) {
  } 
  
  /*esto va en otro lado para MOSTRAR EL MENSAJE
  viewEl.innerHTML = '<p>No existen coincidencias</p>';*/
  

/*7. Mostrar todos los componentes cuando se borra el texto del input
searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Backspace' && searchInput.value.trim() === '') {
    renderItems(data);
  }
});*/ 