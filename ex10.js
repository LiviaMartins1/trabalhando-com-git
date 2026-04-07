const readline = require ('readline-sync') 

let totalDePaginas = 300

let = qtdPaginasLidas = readline.questionInt('Quantas paginas você leu?:')

let percentual = (qtdPaginasLidas / totalDePaginas) * 100


console.log('-------- RESULTADO ---------')

console.log(`O usuario leu ${percentual}% do livro`)
