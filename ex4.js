const readline = require('readline-sync')



let meta = 10000

let passos = readline.questionInt('Quantos passos voce deu hoje?')

let diferenca = meta - passos 

console.log('======== RESULTADO ========')
if(passos >= meta){
    console.log('Parabéns!! Você atingiu a meta')
    console.log(`Você passou ${Math.abs (diferenca)} passou da meta`)
}else{
    console.log(`faltaram ${diferenca} passos`)
}

