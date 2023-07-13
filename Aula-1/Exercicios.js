//console.log("Olá mundo")

let prompt = require('prompt-sync')()

//let nome = prompt("Digita seu nome: ")
//console.log('Olá ' + nome)
// let numero = prompt('Digite um numero: ')
// if (numero >10) {
//     console.log("Maior que 10")
// } else if(numero == 10){
//     console.log("Igual a 10")
// } else {
//     console.log("Menor que 10")
// }

//let letra = prompt("Digite uma letra: ")
// if(letra = "a") {
//     console.log("letra a")
// } else if (letra == "b"){
//     console.log("letra b")
// } else if (letra == "c"){
//     console.log("letra c")
// } else {
//     console.log("letra não existe")
// }

// switch(letra){
//     case "a":
//         console.log("letra a")
//         break
//     case "b":
//         console.log("letra b")
//         break
//     case "c":
//         console.log("letra c")
//         break
//     default:
//         console.log("letra não existe")
//         break
// }

// let  pNum = parseInt(prompt("Digite o primeiro numero: "))
// let sNum = parseInt(prompt("Digite o segundo numero: "))

// let soma = pNum + sNum

// if (soma >10) {
//     console.log("A soma é: " + soma + " e é maior que 10")
// } else if (soma == 10){
//     console.log("A soma é: " + soma + " e é igual que 10")
// } else {
//     console.log("A soma é: " + soma + " e é menor que 10")
// }



// V && V == V
// V && F == F
// F && V == F
// F && F == F

// V || V == V
// V || F == V
// F || V == V
// F || F == F

let numero = parseInt(prompt("Digite um numero: "))

let restante = numero % 2

if(restante != 0){
    console.log("O número é impar")
} else{
    console.log("O número é par")
}