const readline= require('readline-sync')

let idade = readline.questionInt('Informe sua idade:')

if(idade >= 18){
    console.log('Você pode entrar no evento.')
}else{
    console.log('Você não pode entar no envento')
}










