import data from '../Data/dataset.js'
export const richPerson = ({id}) => {
  const person = data.find((richperson) => richperson.id === id );
  const viewEl = document.createElement('section');
  viewEl.setAttribute('class', 'card')
  viewEl.innerHTML = `
  <div class="card__info">
  <img src="${person.imageUrl}" id="millionairePhoto">
  <article class="card__info-dat"> 
      <p class="card__info-name">Nombre: ${person.name}</p>
      <p id="card__info-continent"></p>
      <p id="card__info-fortune"></p>
      <p id="card__info-shortDescription">Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Error rem fuga, voluptas ipsa consequuntur ex ver
          </p>
      </article>
</div>
<section class="card__chat">
  <p class="card__chat-title">CHAT</p>
  <div class="card__chat-conversation"></div>
  <span class="card__chat-input">
      <input type="text" name="" id="chat-input">
      <img src="" id="send-icon">
  </span>    
`;

  return viewEl;
};
export default richPerson;