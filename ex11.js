const readline = require ('readline-sync')

let tamanhoTotal= 20

let qtdBaixada = readline.questionInt('Quantos GB foram baixados?:')

let percentual = (qtdBaixada / tamanhoTotal) * 100 

console.log('---------------------------------')
console.log('---------- RESULTADO ------------')
console.log('---------------------------------')

console.log(`Foram carregados ${percentual}% do arquivo`)