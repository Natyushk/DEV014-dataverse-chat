
import { getApiKey } from './apikey.js';

export const communicateWithOpenAI = (richPerson, userMessage) => {

  const apiKey = getApiKey();

  const response = fetch('https://api.openai.com/v1/chat/completions', {
    method : "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: 'system',
          content:`You are a ${richPerson}`
        },
        {
          role: 'user',
          content: `${userMessage}`
        }]
    })
  });

  return response.then(res =>{
    if (!res.ok){
      throw new Error('La solicitud falló');
    }
    const data = res.json();
    return data;

  }).catch(err => {
    //console.error(err);
    return err;
  })
};
