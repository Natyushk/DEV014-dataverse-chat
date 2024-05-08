import header from "../Components/header.js";
import cardGroupChat from "../Components/cardGroupChat.js";
import footer from "../Components/footer.js";
import { sidebar } from "../Components/sidebar.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import nodeMessage from "../Components/message.js";
import data from "../Data/dataset.js";
//import showMessages from "../lib/chat.js";

export const Panel = () => {
  const panelContainer = document.createElement('section');
  panelContainer.appendChild(header());
  panelContainer.appendChild(sidebar('panel'))  
  panelContainer.appendChild(cardGroupChat());
  panelContainer.appendChild(footer('chat'));
  const prompInput = panelContainer.querySelector('#chat-input');
  const sendButton = panelContainer.querySelector('#send-icon');
  const chatContainer = panelContainer.querySelector('.card__chat-conversation');

  sendButton.addEventListener('click', () =>{
    const prompUser = prompInput.value;
    const promises = data.map(person => {
      const promise = new Promise((resolve, reject) => {
        communicateWithOpenAI(person.name, prompUser).then(response =>{
          const responseMessage = response.choices[0].message.content;
          const message = nodeMessage('apiResponse', responseMessage, person.name)
          chatContainer.appendChild(message);
          resolve();
        }).catch(error => {
          reject(error);
        })
      });
      return promise;
    });
    console.log("arrar de pormesas", promises);

    Promise.all(promises)
      .then(() => console.log('Se enviaron y recibieron todos los mensajes'))
      .catch(error => { throw new Error ('Error al enviar o recibir mensajes', error)});

    // const prompUser = prompInput.value;
    // chatContainer.appendChild(nodeMessage('user', prompUser));
    // const promises = data.map(person => {
    //   communicateWithOpenAI(person.name, prompUser).then(response =>{
    //     const responseMessage = response.choices[0].message.content;
    //     return responseMessage;
    //   })
    // });
    // prompInput.value = "";
  

    // Promise.all(promises).then(response => console.log(response))
    // data.forEach(person => {
    //   const promise = communicateWithOpenAI(person.name, prompUser)
    //     .then(response => {
    //       const responseMessage = response.choices[0].message.content;
    //       chatContainer.appendChild(nodeMessage('apiResponse', responseMessage, person.name));
    //     }).catch(error => {
    //       console.error(error);
    //     });
    //   promises.push(promise);
    // });
    // Promise.all(promises)
    //   .then(() => console.log('Se enviaron y recibieron todos los mensajes'))
    //   .catch(error => console.error('Error al enviar o recibir mensajes', error))
  })

  document.addEventListener('click', (event) =>{
    if(event === 'Enter'){
      const promises = [];
      const prompUser = prompInput.value;
      chatContainer.appendChild(nodeMessage('user', prompUser));
      prompInput.value = "";
      data.forEach(person => {
        const promise = communicateWithOpenAI(person.name, prompUser)
          .then(response => {
            const responseMessage = response.choices[0].message.content;
            chatContainer.appendChild(nodeMessage('apiResponse', responseMessage, person.name));
          }).catch(error => {
            console.error(error);
          });
        promises.push(promise);
      });
      Promise.all(promises)
        .then(() => console.log('Se enviaron y recibieron todos los mensajes'))
        .catch(error => console.error('Error al enviar o recibir mensajes', error))
    }
  })

  //     Promise.all(promises)
  // };
    
  /* Manejar el envío de mensajes en el chat grupal
  const sendButton = panelContainer.querySelector('#send-icon');
  const chatContainer = panelContainer.querySelector('.card__chat-conversation');
  const prompInput = panelContainer.querySelector('#chat-input');

  sendButton.addEventListener('click', () => {
    const prompUser = prompInput.value;
    chatContainer.appendChild(nodeMessage('user', prompUser));
    prompInput.value = "";
  
    // Enviar mensajes a cada personaje en el dataset y mostrar la respuesta
    data.forEach(person => {
      communicateWithOpenAI(person.name, prompUser).then(response => {
        const responseMessage = response.choices[0].message.content;
        chatContainer.appendChild(nodeMessage('apiResponse', responseMessage));
      }).catch(error => {
        console.error(error);
      });
    });
  });
 
  // Manejar el envío de mensajes con la tecla Enter
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const prompUser = prompInput.value;
      chatContainer.appendChild(nodeMessage('user', prompUser));
      prompInput.value = "";

      // Enviar mensajes a cada personaje en el dataset y mostrar la respuesta
      data.forEach(person => {
        communicateWithOpenAI(person.name, prompUser).then(response => {
          const responseMessage = response.choices[0].message.content;
          chatContainer.appendChild(nodeMessage('apiResponse', responseMessage));
        }).catch(error => {
          console.error(error);
        });
      });
    }
  });*/
  return panelContainer;
}; 
export default Panel;
