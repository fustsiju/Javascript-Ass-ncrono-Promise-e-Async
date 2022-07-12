// Funções que aceitam qualquer tipo de dado como argumento
function imprimirDado(dado){  //Função sendo usada como argumento para outra função
    console.log('Outras tarefas')
    console.log(dado()) //Sendo chamada de volta "Callback"
}

imprimirDado(function(){
    return 'Olá mundo'
})