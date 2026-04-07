const readline = require ('readline-sync') 

let totalDePaginas = 300


console.log('------------')
console.log(`|BIBLIOTECA|`)
console.log('------------')

let = qtdPaginasLidas = readline.questionInt('Quantas paginas você leu?:')

let percentual = (qtdPaginasLidas / totalDePaginas) * 100

console.log("")

console.log('-------- RESULTADO ---------')

console.log("")
console.log(`O usuario leu ${percentual}% do livro`)
