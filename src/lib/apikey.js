export const getApiKey = () => {
  return localStorage.getItem('ApiKey');
};

export const setApiKey = (key) => {
  localStorage.setItem('ApiKey', key);
};