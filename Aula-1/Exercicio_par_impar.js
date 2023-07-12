let prompt = require('prompt-sync')()

let numero = parseInt(prompt("O número é: "))

if(numero % 2 == 0){
    console.log("o número é par")
} else{
    console.log("o número é impar")
}