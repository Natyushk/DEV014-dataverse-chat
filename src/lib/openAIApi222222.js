// Importa la función para obtener la API KEY desde apiKey.js
//import { getApiKey } from './apikey.js';

export const communicateWithOpenAI = (personBillion,propByUser) => {
  const apiKey = '';

  return fetch('https://api.openai.com/v1/chat/completions', {
    method : "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{
        role:'system',
        content:`you are a ${personBillion}`
      },
      {
        role:'user',
        content:`Responde en spanish la siguiente pregunta: ${propByUser} ?`
      }],
     
    })
  }).then(res =>{
    if (!res.ok){
      throw new Error('La respuesta no esta correcta');
    }
    return res.json().then(res=>res)
  }).catch(err => {
    console.error(err);
    return err;
  })
};
