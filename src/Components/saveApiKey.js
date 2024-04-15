export function saveApiKey() {
  const viewEl = document.createElement('dialog');
  viewEl.setAttribute("class", "mainModal")
  viewEl.setAttribute("id", "mainModal")
  viewEl.innerHTML = `
  <h1>Agregar API KEY</h1>
  <input type="text" id="input-api-key" placeholder = "Ingresa agrega/pega API Key aquí">
  <button id="save-apikey">Guardar API KEY</button>
  `;
  return viewEl
}
export default saveApiKey;
