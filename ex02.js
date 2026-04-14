const readline = require('readline-sync')
 
console.log('====== SISTEMA DE PEDIDO=======')

let nome = readline.question('Informe seu nome:')
 
let nomeDoPrato = readline.question('Informe o nome do prato escolhido:')

let valorDoPrato = readline.questionFloat('Innforme o valor do prato:')

console.log('====== RESUMO DO PEDIDO =====')
console.log(`Cliente: ${nome}`)
console.log(`Prato Escolhido: ${nomeDoPrato}`)
console.log(`Valor: ${valorDoPrato}`) 
