import header from "../Components/header.js";
import cardChat from "../Components/cardChat.js";
import footer from "../Components/footer.js";
import { sidebar } from "../Components/sidebar.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export const richPerson = ({id}) => {
  const personContainer = document.createElement('section');
  personContainer.appendChild(header());
  personContainer.appendChild(sidebar('richPerson'))
  personContainer.appendChild(cardChat({id}));
  personContainer.appendChild(footer());
  
  //Llamado a la funcion de comunicateWith OAI
  communicateWithOpenAI(['hola'])
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log('Error:', error);
    });
  // console.log(communicateWithOpenAI('hola'));

  return personContainer;
};
export default richPerson;