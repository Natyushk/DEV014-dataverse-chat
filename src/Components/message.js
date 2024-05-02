export const showMessage = (message) => {
  const layoutMessage = document.createElement('div');
  layoutMessage.setAttribute('class', 'layout-message');
  layoutMessage.innerHTML = `
    <p>${message}</p>
    `;
  return layoutMessage;
}
export default showMessage;