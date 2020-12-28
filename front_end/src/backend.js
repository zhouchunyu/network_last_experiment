const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/',
  timeout: 1000
});

function exec_commands(router_name, commands){
  instance.post('exec_commands', {
    host: router_name,
    commands: commands
  })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

export { exec_commands }