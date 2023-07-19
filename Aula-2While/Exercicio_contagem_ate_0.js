const prompt = require('prompt-sync')()

let numero = prompt("Qual o número? ")

while (numero >= 0) {
    console.log(numero);
    numero--
}