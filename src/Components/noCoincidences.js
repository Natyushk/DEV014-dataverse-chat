export function  noCoincidences() {
    const viewEl = document.createElement('div');
    viewEl.innerHTML = `
    <p>No existen coincidencias</p>
    `;
    return viewEl
}
export default noCoincidences;