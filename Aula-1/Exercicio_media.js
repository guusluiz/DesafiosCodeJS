let prompt = require('prompt-sync')()

nota1 = parseInt(prompt("Qual a primeira nota: "))
nota2 = parseInt(prompt("Qual a segunda nota: "))
nota3 = parseInt(prompt("Qual a terceira nota: "))
nota4 = parseInt(prompt("Qual a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log("A média foi " + media)
if(media >= 7){
    console.log("O aluno foi aprovado")
} else if (media < 5){
    console.log("O aluno foi reprovado")
} else {
    console.log("O aluno está de recuperação")
}