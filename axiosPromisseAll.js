//Utilizando o Promise All para fazer mais de uma promessa ao mesmo tempo.

import axios from 'axios'

Promise.all([                                                   //Realizando Promessas multiplas com array
  axios.get('https://api.github.com/users/fustsiju'),
  axios.get('https://api.github.com/users/fustsiju/repos')
])
.then( responses => {
  console.log( responses[0].data.login)                     //Pegando o login do primeiro elemento do array
  console.log( responses[1].data.length)                    //Pegando o tamanhao do segundo elemento do array
})
.catch(err => console.log(err.message))