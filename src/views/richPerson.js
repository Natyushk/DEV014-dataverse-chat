import header from "../Components/header.js";
import cardChat from "../Components/cardChat.js";
//import footer from "../Components/footer.js";
import { sidebar } from "../Components/sidebar.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
//import showMessage from "../Components/message.js";

export const richPerson = ({id}) => {
  const personContainer = document.createElement('section');
  personContainer.appendChild(header());
  personContainer.appendChild(sidebar('richPerson'))
  personContainer.appendChild(cardChat({id}));
  // personContainer.appendChild(footer());
  
  //const chatContainer = personContainer.querySelector('.card__chat-conversation');
  const sendButton = personContainer.querySelector('#send-icon');
  //const prompInput = personContainer.querySelector('#chat-input');

  sendButton.addEventListener('click', () => {
     //const promp = prompInput.value;
     //chatContainer.appendChild(showMessage(promp));
    // const responseMessage = communicateWithOpenAI(promp); 
    // chatContainer.appendChild(showMessage(responseMessage));
    
    // prompInput.value = "";
    communicateWithOpenAI('Elon musk', 'Que te inspiro a viajar al espacio').then(response =>{
      console.log(response)
    }).then(err=>{
      console.log(err);
    })
  });

  return personContainer;
};  
export default richPerson;