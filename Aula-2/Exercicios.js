// let prompt = require('prompt-sync')()

// let nomes = ["Alana", "Aléxia", "Samanta", "Thiago", "Odirlei"]

// for(let contador = 0; contador < nomes.length; contador++){
//     const cadaElemento = nomes[contador]
//     console.log(cadaElemento)
//}

// nomes.forEach((cadaElemento, posicao) => {
//     console.log(posicao, cadaElemento);
// })

// const frutas = ["Pera", "Uva", "Maça", "Salada Mista"]

// for(let contador = 0; contador < frutas.length; contador++){
//     const cadaElemento = frutas[contador]
//     console.log(contador, cadaElemento)
// }

// frutas.forEach(cadaElemento => {
//     console.log(cadaElemento)
// })

// let salario = 5000
// let contador = 0

// while (salario < 5000){
//     salario +=100
//     console.log("O seu salário ainda é R$" + salario);
//     contador++
// }

// do{
//     salario += 100
//     console.log("O seu salário ainda é R$" + salario);
//     contador++
// } while (salario < 5000)

const prompt = require('prompt-sync')()

// let numeroEscolhido;

// do {
//      numeroEscolhido = prompt("Digite um número: ")

// } while (numeroEscolhido != "5");

let senha;
do {
    senha = prompt("Digite a senha: ")

    if(senha != "123"){
        console.log("Senha incorreta");
    }
} while (senha != "123");

console.log("Senha correta");