const readline = require('readline-sync')

let freteGratis = 100

let valoDaCompra = readline.questionFloat('Qual o valor da compra?')

let diferenca = freteGratis - valoDaCompra

if(valoDaCompra > freteGratis){
    console.log('Você adquiriu o frete gratis')
}else{
    console.log('Você não adquiriu o frete gratis')
    console.log(`Faltam ${Math.abs(diferenca)} para adquirir o frete gratis`)
}

