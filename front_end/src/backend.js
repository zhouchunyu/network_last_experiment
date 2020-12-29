const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 10000
});

function exec_commands(router_name, commands){
  let data = {};
  instance.post('exec_commands', {
    host: router_name,
    commands: commands
  })
  .then(function (response) {
    // handle success
    console.log(response);
    data = response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  return data;
}

export { exec_commands }