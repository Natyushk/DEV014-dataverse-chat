export function footer(view) {
  const viewEl = document.createElement('footer');
  if(view === 'chat'){
    viewEl.setAttribute("class","chat-footer");
  }
  viewEl.innerHTML = `
    <p>Nataly Molano y Sandra Morales</p>
  `;
  return viewEl
}
export default footer;