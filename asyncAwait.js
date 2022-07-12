const promessa = new Promise( function( resolve, reject) {
    return resolve('Ok')
})

async function start(){
    try {
        const result = await promessa
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Sempre irei executar')
    }
}

start()

//Padrão
//promessa
//    .then(function(response){
//        console.log(response)
//    })
//    .catch(function(response){
//        console.log(error)
//    })
//    .finally(function(){
//        console.log('Sempre irei executar')
//    })
