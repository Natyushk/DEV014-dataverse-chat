  export function divStats() {
    const viewEl = document.createElement('div');
    viewEl.setAttribute("id", "fortune-stats")
    viewEl.innerHTML = `
        <p id="total-fortune">Suma total de fortunas:</p>
        <p id="average-fortune">Promedio de fortunas:</p>
    `;
    return viewEl
}
export default divStats;