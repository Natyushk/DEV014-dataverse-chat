import { communicateWithOpenAI } from "./openAIApi.js";
import nodeMessage from "../Components/message.js";

//obtener los elementos de DOM

//Función para enviar un mensaje al servidor 
export function showMessages(prompInput, chatContainer, namePerson){
  const prompUser = prompInput.value;
  console.log('2');
  chatContainer.appendChild(nodeMessage('user', prompUser));
  prompInput.value = "";
  return communicateWithOpenAI(namePerson, prompUser).then(response => {
    const responseMessage = response.choices[0].message.content;
    console.log('3');
    //Mostrar la respsuesta de Open Ai en el Chat
    chatContainer.appendChild(nodeMessage('apiResponse', responseMessage, namePerson));
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }).catch(error => {
    chatContainer.appendChild(nodeMessage('error', error.message, 'Lo sentimos'));
  })
}
export default showMessages;