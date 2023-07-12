let prompt = require('prompt-sync')()

let numero1 = parseInt(prompt("O número é: "))
let numero2 = parseInt(prompt("O número é: "))

if (numero1 > numero2){
    console.log("o maior numero é " + numero1)
} else{
    console.log("o maior numero é " + numero2)
}