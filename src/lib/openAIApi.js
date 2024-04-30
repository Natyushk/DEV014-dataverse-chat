// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apikey.js';

export const communicateWithOpenAI = (messages) => {
  const apiKey = getApiKey();
  const url = 'https://api.openai.com/v1/chat/completions';
  const requestBody = {
    messages: messages,
    model: "gpt-3.5-turbo",
    temperature: 0.7,
  };

  const response = fetch(url, {
    method : "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(requestBody)
  });

  return response.then(res =>{
    if (!res.ok){
      throw new Error('La respuesta no esta correcta');
    }
    const data = res.json();
    return data;
  }).catch(err => {
    console.error('Error de fetch:', err);
    return err;
  })
};
