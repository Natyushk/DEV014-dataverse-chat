import { communicateWithOpenAI } from '../src/lib/openAIApi.js';

global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Tengo 37 años' }),
  })
);

test('communicateWithOpenAI devuelve los datos correctamente', async () => {
  const data = await communicateWithOpenAI('Mark Zuckerberg', '¿Que edad tienes?');
  expect(data).toEqual({ message: 'Tengo 37 años' });
});

describe('communicateWithOpenAI', () => {
  test('Debería obtener una respuesta válida de OpenAI', () => {
    // Simula un mensaje válido enviado a OpenAI
    const richPerson = "Jeff Bezos";
    const userMessage = "Hola, ¿cómo estás?";
    
    // Verifica que la función retorne una respuesta válida
    return communicateWithOpenAI(richPerson, userMessage).then(response => {
      expect(response).toBeDefined();
      expect(response.choices[0].message.content).toBeTruthy();
    });
  });

  test('Debería manejar una respuesta inválida de OpenAI', () => {
    // Simula un mensaje inválido enviado a OpenAI
    const richPerson = "Bill Gates";
    const userMessage = "Esto es una prueba";
    
    // Verifica que la función maneje correctamente una respuesta inválida
    return communicateWithOpenAI(richPerson, userMessage).catch(error => {
      expect(error).toBeDefined();
    });
  });
});