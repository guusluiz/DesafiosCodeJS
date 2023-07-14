let prompt = require('prompt-sync')()

let num1 = prompt("digite um número: ")
let num2 = prompt("digite outro número: ")
let num3 = prompt("digite digite mais um número: ")

if(num1 < num2 && num2 < num3){
    console.log("Os números estão em ordem crescente")
} else{
    console.log("Os números não estão em ordem crescente")
}