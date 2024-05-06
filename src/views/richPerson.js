import header from "../Components/header.js";
import cardChat from "../Components/cardChat.js";
import footer from "../Components/footer.js";
import { sidebar } from "../Components/sidebar.js";
//import { communicateWithOpenAI } from "../lib/openAIApi.js";
//import nodeMessage from "../Components/message.js";
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

  // function showMessages(){
  //   const prompUser = prompInput.value;
  //   chatContainer.appendChild(nodeMessage('user', prompUser));
  //   prompInput.value = "";

  //   communicateWithOpenAI(namePerson, prompUser).then(response => {
  //     const responseMessage = response.choices[0].message.content;
  //     chatContainer.scrollTop = chatContainer.scrollHeight;
  //     //Mostrar la respsuesta de Open Ai en el Chat
  //     chatContainer.appendChild(nodeMessage('apiResponse', responseMessage));

  //   }).catch(error => {
  //     // const responseMessage = response;
  //     // chatContainer.appendChild(nodeMessage('error', err));
  //     console.error(error);
  //   })
  // }

  return personContainer;
}; 
export default richPerson;