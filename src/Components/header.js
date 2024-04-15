export function header() {
  const viewEl = document.createElement('header');
  viewEl.innerHTML = `
  <h1>Personas mas ricas del mundo</h1>
  `;
  return viewEl
}
export default header;