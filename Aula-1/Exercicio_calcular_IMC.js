let prompt = require('prompt-sync')()

let peso = prompt("Seu peso(em kg): ")
let altura = prompt("Sua altura(em metros): ")

var IMC = peso / (altura * altura)

if (IMC < 18.5) {
    console.log("Abaixo do peso")
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log("Peso normal")
} else if (IMC >= 25.0 && IMC <= 29.9) {
    console.log("Sobrepeso")
} else if (IMC >= 30.0 && IMC <= 34.9) {
    console.log("Obesidade grau 1")
} else if (IMC >= 35.0 && IMC <= 39.9) {
    console.log("Obesidade grau 2")
} else if (IMC >= 40.0) {
    console.log("Obesidade grau 3")
}