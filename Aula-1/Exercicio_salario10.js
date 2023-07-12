let prompt = require('prompt-sync')()

let nome = prompt("Digite o nome: ")
let cargo = prompt("Digite o cargo: ")
let salario = parseInt(prompt("Digite o salário: "))

if(salario < 1000){
    salario = salario + 0.1*salario
}
console.log("o nome é: " + nome)
console.log("o cargo é: " + cargo)
console.log("o salário é: " + salario)