export function searchInput () {
  const viewEl = document.createElement('section');
  viewEl.setAttribute("id", "search-section")
  viewEl.innerHTML = `
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
    <input type="text" id="search-input" placeholder="Buscar por nombre">
    <button data-testid="button-clear" id="reset-button">Limpiar</button>
  `;
  return viewEl;
}
export default searchInput;