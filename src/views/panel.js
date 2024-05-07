import header from "../Components/header.js";
import cardGroupChat from "../Components/cardGroupChat.js";
import footer from "../Components/footer.js";
import { sidebar } from "../Components/sidebar.js";
//import { communicateWithOpenAI } from "../lib/openAIApi.js";
//import nodeMessage from "../Components/message.js";
//import data from "../Data/dataset.js";
//import showMessages from "../lib/chat.js";

export const richPerson = () => {
  const personContainer = document.createElement('section');
  personContainer.appendChild(header());
  personContainer.appendChild(sidebar('panel'))
  personContainer.appendChild(cardGroupChat());
  personContainer.appendChild(footer('chat'));
  
  // const sendButton = personContainer.querySelector('#send-icon');
  // const chatContainer = personContainer.querySelector('.card__chat-conversation');
  // const prompInput = personContainer.querySelector('#chat-input');
  // const person = data.find((idPerson) => idPerson.id === id);
  // const namePerson = person.name; 

  // sendButton.addEventListener('click', showMessages);

  // document.addEventListener('keydown', (event) => {
  //   if(event.key === 'Enter'){
  //     showMessages(prompInput, chatContainer, 
  //     );
  //   }
  // });
  return personContainer;
}; 
export default richPerson;