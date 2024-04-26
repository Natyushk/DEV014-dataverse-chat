import header from "../Components/header.js";
import cardChat from "../Components/cardChat.js";
import footer from "../Components/footer.js";

export const richPerson = ({id}) => {
  const personContainer = document.createElement('section');
  personContainer.appendChild(header());
  personContainer.appendChild(cardChat({id}));
  personContainer.appendChild(footer())
  return personContainer;
};
export default richPerson;