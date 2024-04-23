import  {setApiKey}  from "../lib/apikey.js";
import { navigateTo } from "../router.js";

export function saveApiKey() {
  const viewEl = document.createElement('div');
  viewEl.setAttribute('id', 'form-ApiKey')
  viewEl.innerHTML = `
  <h1>Agregar API KEY</h1>
  <input type="text" id="input-api-key" placeholder = "Ingresa agrega/pega API Key aquí">
  <button id="save-apikey">Guardar API KEY</button>
  `;

  //Agregamos comportamiento
  const saveButton = viewEl.querySelector('#save-apikey');
  saveButton.addEventListener('click', () => {
    const apikey = document.getElementById("input-api-key").value;
    setApiKey(apikey);
    navigateTo("/")
  });

  return viewEl
}
export default saveApiKey;
