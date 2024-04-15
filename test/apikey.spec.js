import { getApiKey, setApiKey } from "../src/lib/apikey";

describe('getApiKey', () => {
  it('Debería devolver el valor de la API Key', () => {
    localStorage.setItem('apiKey', 'testKey');
    expect(getApiKey()).toBe('testKey');
  });
});

describe('setApiKey', () => {
  it('Debería establecer correctamente la API Key', () => {
    setApiKey('testKey');
    expect(localStorage.getItem('apiKey')).toBe('testKey');
  });
});