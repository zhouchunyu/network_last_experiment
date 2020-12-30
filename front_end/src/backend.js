const axios = require('axios').default;

//https://5feb1c81573752001730a4b9.mockapi.io/

const instance = axios.create({
  baseURL: 'https://5feb1c81573752001730a4b9.mockapi.io/',
  timeout: 10000
});

export { instance }