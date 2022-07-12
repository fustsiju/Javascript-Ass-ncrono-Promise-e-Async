const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res=> {
    console.log(res.statusCode)     //Retornará '200' caso tenho tido sucesso na conexão
})                             
console.log('Conectando API')       //Primeira linha de código na saída pois a API precisa de verificação para dar o callback
                                    //este processo demora mais tempo, sendo assim é deixado de lado até as outras tarefas
                                    //serem executadas