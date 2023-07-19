const prompt = require('prompt-sync')()
let idade
do {
    idade = prompt("Qual a idade? ")
} while (idade < 18);

console.log("Idade maior que 18");