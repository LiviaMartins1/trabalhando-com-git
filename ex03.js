const readline = require('readline-sync')
 
let nome = readline.question('Nickname do Jogador:')

let jogoFavorito = readline.question('Jogo Favorito:')

let pontuacaoAtual = readline.question('Pontuação Total:')

console.log('====== PERFIL DO JOGADOR ======')

console.log(`Nickname Do Jogador:${nome}`)

console.log(`Jogo Favorito: ${jogoFavorito}`)

console.log(`Pontuação Total: ${pontuacaoAtual}`)
