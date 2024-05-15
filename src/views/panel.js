import header from "../Components/header.js";
import cardGroupChat from "../Components/cardGroupChat.js";
import footer from "../Components/footer.js";
import { sidebar } from "../Components/sidebar.js";
import nodeMessage from "../Components/message.js";
import data from "../Data/dataset.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export const Panel = () => {
  const panelContainer = document.createElement('section');
  panelContainer.appendChild(header());
  panelContainer.appendChild(sidebar('panel'))  
  panelContainer.appendChild(cardGroupChat());
  panelContainer.appendChild(footer('chat'));
  const prompInput = panelContainer.querySelector('#chat-input');
  const sendButton = panelContainer.querySelector('#send-icon');
  const chatContainer = panelContainer.querySelector('.card__chat-conversation');

  function panelChat(){
    const prompUser = prompInput.value;
    chatContainer.appendChild(nodeMessage('user', prompUser));
    const promises = data.map(person => {
      return communicateWithOpenAI(person.name, prompUser).then(response =>{
        const responseMessage = response.choices[0].message.content;
        return [responseMessage, person.name];
      })
    });
    prompInput.value = '';
    Promise.all(promises)
      .then(res => {
        res.forEach(element => {
          chatContainer.appendChild(nodeMessage('apiResponse', element[0], element[1]));
          chatContainer.scrollTop = chatContainer.scrollHeight;
        })
      })
      .catch(error => {
        console.error(error);
      });
  }
  sendButton.addEventListener('click', panelChat);

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
      panelChat();
    }
  });
  
  return panelContainer;
}; 
export default Panel;
