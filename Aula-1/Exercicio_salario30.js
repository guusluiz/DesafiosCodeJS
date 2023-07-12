let prompt = require('prompt-sync')()

let salario = parseInt(prompt("Digite o salário: "))

if(salario < 500){
    salario = salario + 0.3*salario
    console.log("o salário é: " + salario)
} else {
    console.log("você não pode ter um aumento")
}
