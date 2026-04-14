const readline = require('readline-sync')

let meta = 40 

let horaEstudadas = readline.questionFloat('Quantas horas você estudou?:')

let diferenca = meta - horaEstudadas

console.log('======== HORAS ESTUDADAS ========')

if(meta<= horaEstudadas){
    console.log('Parabéns!! Você atingiu a meta')
console.log(`Você estudou mais ${Math.abs(diferenca)} horas que a meta`)
}else{
    console.log(`faltaram ${diferenca} horas`)
}

    
