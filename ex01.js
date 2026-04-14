// const readline = require('readline-sync')

// let nome = readline.question('Digite seu nome: ')

// console.log(`Seu nome é: ${nome}`)


//----------------------------------------------//

 
const readline =  require('readline-sync')

console.log('=======SISTEMA DE CADASTRO========')
let nome = readline.question('Digite seu nome:')

let Curso = readline.question('Informe o curso:')

let idade = readline.questionInt('Digite sua idade:')
console.log(`=======INFORMAÇAO========`)
console.log(`Nome do usuario: ${nome}`)
console.log(`Curso do usuario: ${Curso}`)
console.log(`Idade do usuario: ${idade}`)


