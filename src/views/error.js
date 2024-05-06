export const error = () => {
  const viewEl = document.createElement('div');
  viewEl.classList.add('error');
  viewEl.innerHTML = `
  <img src= "https://raw.githubusercontent.com/Natyushk/DEV014-dataverse-chat/main/src/assets/millonario%20llorando.jpeg" alt="Millonario llorando">
  <h1> Cometiste un error, verifícalo! </h1> 
  `;

  return viewEl;
};
export default error;
