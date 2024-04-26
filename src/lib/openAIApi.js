// Importa la función para obtener la API KEY desde apiKey.js
import header from '../Components/header.js';
import { getApiKey } from './apiKey.js';


export const communicateWithOpenAI = (messages) => {
  const apiKey = getApiKey();
  const url = 'https://api.openai.com/v1/chat/completions';
  const requestBody = {
   messages: messages,
   model: 'buscarnuestromodelodeid'//aqu se debe poner el id del modelo (cual es)?
  };

  try {
   const response: await fetch(url, {
      method : "POST"
      headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
   });

   if (!response.ok){
      throw new Error('La respuesta no esta correcta')
   }

   const data = await response.json();
   return data;

  } catch (error) {
   console.error('Error de fetch:', error);
   return null;
  }
   
  // Aqui se debe implementar la peticion con fetch o axios
};