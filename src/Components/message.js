export const nodeMessage = (typeMessage, message) => {
  const layoutMessage = document.createElement('div');
  
  typeMessage === 'user' ? layoutMessage.setAttribute('class', 'user-message'): (typeMessage === 'apiResponse' ? layoutMessage.setAttribute('class', 'response-message') : layoutMessage.setAttribute('class', 'error-message'));
    
  layoutMessage.innerHTML = `
    <div class = "pContainer">
    <p>${message}</p>
    `;
  return layoutMessage;
}
export default nodeMessage;