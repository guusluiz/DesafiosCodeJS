let prompt = require('prompt-sync')()

let numero = parseInt(prompt("O número é: "))

if (numero > 0){
    console.log("o número é positivo")
} else if (numero == 0){
    console.log("o número é igual a zero")
} else {
    console.log("o número é negativo")
}