import { communicateWithOpenAI } from "./openAIApi";

//obtener los elementos de DOM

//Finción para enviar un mensaje al servidor 
const sendMessage = async () => {
    //obtener el mensje del usuario

const message = messageInput.value.trim();
if (message) {
    try {
    //enviar el mensaje a Open AI y obtener la respuesta
    const response = await communicateWithOpenAI(message);

    //Mostrar la respuesta en el chat (ir en el view)
    const messageElement = document.createElement('div')
    messageElement.textContent = response;
    chatArea.appendChild(messageElement)
    
    }
}
}
export function chatEvent(promp) {
  prompInput.value;
    chatContainer.appendChild(showMessage(promp));
    const responseMessage = communicateWithOpenAI(promp);
    chatContainer.appendChild(showMessage(responseMessage));
    
    prompInput.value = "";
    console.log(communicateWithOpenAI('hola'))