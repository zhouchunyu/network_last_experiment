const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 10000
});

function exec_commands(router_name, commands){
  return "hello, world";
  let code = {};
  instance.post('exec_commands', {
    host: router_name,
    commands: commands
  })
  .then(function (response) {
    // handle success
    console.log(response);
    code = response.data.code;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  return code;
}

export { exec_commands }