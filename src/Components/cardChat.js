import data from '../Data/dataset.js'

export const cardChat = ({id}) => {
  const person = data.find((richperson) => richperson.id === id );
  const viewEl = document.createElement('section');
  viewEl.setAttribute('class', 'cardChat');
  viewEl.innerHTML = `
  <div class="card__info">
  <img src="${person.imageUrl}" id="millionairePhoto">
  <article class="card__info-dat"> 
      <p class="card__info-name">${person.name}</p>
      <p id="card__info-continent">${person.extraInfo.continent}</p>
      <p id="card__info-fortune">${person.facts.fortune}</p>
      </article>
  </div>
  <section class="card__chat">
      <p class="card__chat-title">CHAT</p>
      <div class="card__chat-conversation"></div>
      <span class="card__chat-span">
            <input type="text" name="" id="chat-input">
            <img src="../assets/send-icon.png" id="send-icon">
        </span>  
`;
  return viewEl;
};
export default cardChat;