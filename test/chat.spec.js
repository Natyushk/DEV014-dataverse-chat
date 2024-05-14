//import showMessages from "../src/lib/chat.js";

import showMessages from "../src/lib/chat.js";

global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => Promise.resolve(
      {choices: [{message: {content: 'Tengo 37 años'}}]}
    )
  })
);

describe('Se crea un nodo de mensaje por cada respuesta', ()=> {
  const chatContainer = document.createElement('div');  
  const input = document.createElement('input');
  input.value = '¿Qué edad tienes?';
 
  it('Crea un nodo para el mensaje del usuario', () => {
    showMessages(input, chatContainer, 'Mark Zuckerberg');
    const userElement = chatContainer.querySelector('.user-message #message')
    expect(userElement).toBeDefined();
    expect(chatContainer.innerHTML).toContain('¿Qué edad tienes?');
  });
  
  it('Crea un nodo para el mensaje de respuesta de Open AI', () => {
    chatContainer.innerHTML = "";
    showMessages(input, chatContainer, 'Mark Zuckerberg');
    
    expect(chatContainer.innerHTML).toContain('¿Qué edad tienes?');
  });

  it('Crea un nodo para el mensaje de error', () => {
    // global.fetch = jest.fn(() => 
    //   Promise.reject(new Error('Error de la API de OpenAI'))
    // );
    showMessages(input, chatContainer, 'Mark Zuckerberg');
    expect(chatContainer.innerHTML).toContain('La solicitud falló');
  })

  //})
  // global.fetch = jest.fn(() => 
  //   Promise.reject(new Error('Error de la API de OpenAI'))
  // );

  // test('communicateWithOpenAI maneja correctamente los errores de la API', () => {
  //   const richPerson = "Jeff Bezos";
  //   const userMessage = "Hola, ¿cómo estás?";
  
//   return communicateWithOpenAI(richPerson, userMessage).catch(error => {
//     expect(error).toBeDefined();
//     expect(error.message).toBe('Error de la API de OpenAI');
//   });
});