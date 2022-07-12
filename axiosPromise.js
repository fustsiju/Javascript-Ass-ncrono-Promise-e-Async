import axios from "axios"; //Importante Axios

axios
  .get('https://api.github.com/users/fustsiju')             //Pegando API do github
  .then(response => axios.get(response.data.repos_url))     //Pegando o repos_url da API
  .then(repos => console.log(repos.data))                  
  .catch(error => console.log(error))