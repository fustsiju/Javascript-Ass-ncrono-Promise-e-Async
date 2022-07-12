// Promise é utilizado em operações assíncronas, como: carregar um arquivo/ Leitura de dados de uma API.
// Ela tem 4 estágios: Pending: Estado inicial, assim que o Objeto da promessa é iniciado.
                    //Fullfilled: A promessa foi concluída com sucesso.
                    //Rejected: A promessa foi rejeitada, houve um erro.
                    //Settled: Seja com sucesso ou com erro, ela foi finalmente concluída.

let aceitar = false

console.log('Pedir uber')
const promessa = new Promise((resolve, reject) => {     //Pending.
    if(aceitar){
    return resolve('Carro chegou')
    }
    else{
        return reject('Pedido negado')
    }
})

console.log('Aguardando')

promessa.then(result => console.log(result))        //Fullfilled.
        .catch(erro=>console.log(erro))             //Rejected.
        .finally(() => console.log('Finalizada'))   //Settled.