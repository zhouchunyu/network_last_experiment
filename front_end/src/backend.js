const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000
});

function exec_commands(){
  instance.post('exec_commands', {
    host: "RTA",
    commands: [
      "command1",
      "command2"
    ]
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