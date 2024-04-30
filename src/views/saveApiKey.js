import { getApiKey, setApiKey } from "../lib/apikey.js";
import { navigateTo } from "../router.js";

export function saveApiKey() {
  const viewEl = document.createElement('div');
  viewEl.setAttribute('id', 'form-ApiKey')

  viewEl.innerHTML = `
  <h1>Agregar API KEY</h1>
  <input type="password" id="input-api-key" placeholder = "Ingresa agrega/pega API Key aquí">
  <button id="save-apikey">Guardar API KEY</button>
  `;

  //Agregamos comportamiento
  const saveButton = viewEl.querySelector('#save-apikey');
  const inputApikey = viewEl.querySelector('#input-api-key');

  //Visualizar el api key guardada
  const apiKey = getApiKey()
  inputApikey.value = apiKey;

  saveButton.addEventListener('click', () => {
    const newApiKey = inputApikey.value;
    setApiKey(newApiKey);
    navigateTo("/")
  });

  return viewEl
}
export default saveApiKey;
