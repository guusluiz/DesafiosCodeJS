let prompt = require('prompt-sync')()

let numero = parseInt(prompt("Qual número vossa senhoria quer a tabuada: "))

let x = 1
let resposta
do {
    resultado = numero * x
    console.log(numero + "x" + x + "=" + resultado)
    resposta = prompt("você quer que continue? ")
    x++
} while(resposta == "sim")
