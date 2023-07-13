let prompt = require('prompt-sync')()

let numero = parseInt(prompt("Qual número vossa senhoria quer a tabuada: "))

let resposta = "sim"

let x = 1

do {
    resultado = numero * x
    console.log(numero + "x" + x + "=" + resultado)
    resposta = prompt("você quer que continue? ")
    x++
} while(resposta = "sim")
