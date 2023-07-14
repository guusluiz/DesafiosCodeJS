let prompt = require('prompt-sync')()

let dia = prompt("Qual dia da semana você quer? ")

switch(dia){
    case "1":
        console.log("domingo")
        break
    case "2":
        console.log("segunda-feira")
        break
    case "3":
        console.log("terça-feira")
        break
    case "4":
        console.log("quarta-feira")
        break
    case "5":
        console.log("quinta-feira")
        break
    case "6":
        console.log("sexta-feira")
        break
    case "7":
        console.log("sabado")
        break
}