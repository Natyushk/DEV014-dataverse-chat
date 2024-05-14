export const nodeMessage = (typeMessage, message, namePerson) => {
  const layoutMessage = document.createElement('div');
  
  typeMessage === 'user' ? layoutMessage.setAttribute('class', 'user-message'): (typeMessage === 'apiResponse' ? layoutMessage.setAttribute('class', 'response-message') : layoutMessage.setAttribute('class', 'error-message'));
  layoutMessage.innerHTML = `
    <div class = "pContainer">
    <p class= "nameChat">${namePerson}</p>
    <p id = message>${message}</p>
    </div>
    `;
  return layoutMessage;
}
export default nodeMessage;