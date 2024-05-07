import header from "../Components/header.js";
import cardChat from "../Components/cardChat.js";
import footer from "../Components/footer.js";
import { sidebar } from "../Components/sidebar.js";
import data from "../Data/dataset.js";
import showMessages from "../lib/chat.js";

export const richPerson = ({id}) => {
  const personContainer = document.createElement('section');
  personContainer.appendChild(header());
  personContainer.appendChild(sidebar('richPerson'))
  personContainer.appendChild(cardChat({id}));
  personContainer.appendChild(footer('chat'));
  
  const sendButton = personContainer.querySelector('#send-icon');
  const chatContainer = personContainer.querySelector('.card__chat-conversation');
  const prompInput = personContainer.querySelector('#chat-input');
  const person = data.find((idPerson) => idPerson.id === id);
  const namePerson = person.name; 

  sendButton.addEventListener('click', showMessages);

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
      showMessages(prompInput, chatContainer, namePerson);
    }
  });


  return personContainer;
}; 
export default richPerson;