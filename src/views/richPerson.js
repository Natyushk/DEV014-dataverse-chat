export const richPerson = () => {
  const viewEl = document.createElement('section');
  viewEl.setAttribute('class', 'card')
  viewEl.innerHTML = `
        <h1>Vista Chat Individual</h1>
`;
  return viewEl;
};
export default richPerson;