import data from "../Data/dataset.js";

export const cardChat = () => {
  const viewEl = document.createElement('section');
  viewEl.setAttribute('class', 'card-chat-group');
  viewEl.innerHTML = `
  <div class="card__info-group">
  </div>
  <section class="card__chat">
      <p class="card__chat-title">CHAT GRUPAL</p>
      <div class="card__chat-conversation"></div>
      <span class="card__chat-span">
            <input type="text" name="" id="chat-input">
            <img src="../assets/send-icon.png" id="send-icon">
        </span>  
`;
  const chatPeople = viewEl.querySelector('.card__info-group');
  data.forEach(element => {
    const divPerson = document.createElement('div');
    divPerson.classList.add('div-person');
    const name = (element.name);
    const firstWord =name.split(' ')[0];
    divPerson.innerHTML = `
    <img class = "img-group-chat" src = "${element.imageUrl}">
    <div class = "name-description">
      <p id = "name-group">${element.name}</p>
      <p id = "first-name-group">${firstWord}</p>
    </div>
    `;
    chatPeople.appendChild(divPerson)
  });
  const newUl = document.createElement("ul");
  chatPeople.appendChild(newUl)
  return viewEl;
};
export default cardChat;